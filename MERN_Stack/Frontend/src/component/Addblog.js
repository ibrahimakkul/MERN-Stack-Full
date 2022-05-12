import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const style={mt:2,mb:1,fontSize:'24px',fontWeight:'bold',color:'green'};
function Addblog() {
  const navigate=useNavigate();
  const [inputs, setinputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleChange=(e)=>{
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  }
  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:5000/api/blog/add`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user:localStorage.getItem('userId')
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
    
  };
  const handleSumbit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>navigate("/")).then(()=>navigate("/Blogs"))
    .then((data)=>console.log(data))
    .catch(err=>console.log(err))
    

  }

  return (
    <div>
      <form onSubmit={handleSumbit} >
        <Box
          border={3}
          borderColor=" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(145,150,73,1) 35%, rgba(0,212,255,1) 100%)"
          boxShadow="10px 10px 20px #5e290b"
          borderRadius={10}
          padding={3}
          margin={3}
          display='flex'
          flexDirection={'column'}
          width={'80%'}
          
        >
          <Typography fontWeight={'bold'} padding={3} color="green" variant="h2"  textAlign={'center'}>Post Your Blog</Typography>
          <InputLabel sx={style}>Title</InputLabel>
          <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" />
          <InputLabel sx={style}>Description</InputLabel>
          <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />
          <InputLabel sx={style}>ImageUrl</InputLabel>
          <TextField name="image" onChange={handleChange} value={inputs.image} margin="normal" variant="outlined" />
          <Button sx={{mt:2,borderRadius:4 }} variant="contained"
                color="warning" type='sumbit'>Sumbit</Button>
        </Box>
      </form>
    </div>
  );
}

export default Addblog;
