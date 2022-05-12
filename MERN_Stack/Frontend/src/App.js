import Header from "./component/Header";
import React,{useEffect} from "react";
import {  Routes,   Route } from "react-router-dom";
import Auth from "./component/Auth";
import Blogs from './component/Blogs';
import Userblog from './component/Userblog';
import Blogdetails from './component/Blogdetails';
import Addblog from './component/Addblog';
import {useSelector,useDispatch} from "react-redux";
import { authActions } from "../src/store";
import Welcome from "./component/Welcome";


function App() {
  const dispatch=useDispatch();
  const isLoggedIn =useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if(localStorage.getItem("userId")){
       dispatch(authActions.login());
    }
    
  }, [dispatch])
  
  return (
    <React.Fragment>
      <header>
      <Header/>
      </header>
      <main color="red">
        <Routes>
          
         
        <Route exact  path="/" element={<Welcome/> }/>      
          { !isLoggedIn ? <Route  path="/auth"  element={<Auth/> }/> :
          <>
          <Route path="/Blogs" element={<Blogs /> }/>
          <Route path="/Userblog" element={<Userblog /> }/>
          <Route path="/Blogdetails/:id" element={<Blogdetails/> }/>
          <Route path="/Addblog" element={<Addblog/> }/> </> }
        </Routes>
      </main>
    </React.Fragment>
    
  );
}

export default App;
