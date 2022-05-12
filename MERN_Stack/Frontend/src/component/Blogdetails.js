import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const style = {
  mt: 2,
  mb: 1,
  fontSize: "24px",
  fontWeight: "bold",
  color: "green",
};
function Blogdetails() {
  const navigate=useNavigate();
  const [inputs, setinputs] = useState({});
  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [blog, setblog] = useState();
  //const id=localStorage.getItem('userId')
  //console.log("get",id);
  const id1 = useParams().id;
  const fetcDetails = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id1}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  //console.log("params",id1);
  useEffect(() => {
    fetcDetails().then((data) => {
      setblog(data.blog);
      setinputs({
        title: data.blog.title,
        description: data.blog.description,
       
      });
    });
  }, [id1]);
  const sendRequest=async ()=>{
   const res = await axios.put(`http://localhost:5000/api/blog/update/${id1}`,{
     title:inputs.title,
     description:inputs.description
     
   }).catch(err=>console.log(err))

   const data = await res.data;
   return data;

  }
  console.log(blog);
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data)=>console.log(data)).then(()=>navigate("/")).then(()=>navigate("/Userblog"))

  };

  return (
    <div>
     {inputs && <form onSubmit={handleSumbit}>
        <Box
          border={3}
          borderColor=" linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(145,150,73,1) 35%, rgba(0,212,255,1) 100%)"
          boxShadow="10px 10px 20px #5e290b"
          borderRadius={10}
          padding={3}
          margin={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="green"
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel sx={style}>Title</InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="normal"
            variant="outlined"
          />
          <InputLabel sx={style}>Description</InputLabel>
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="normal"
            variant="outlined"
          />
          
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="sumbit"
          >
            Sumbit
          </Button>
        </Box>
      </form>}
    </div>
  );
}

export default Blogdetails;
