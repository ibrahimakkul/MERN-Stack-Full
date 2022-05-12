import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Cart({ title, description, image, userName,isUser,id }) {
  
  const navigate= useNavigate();
 
  

  const handleEdit=()=>{
    navigate(`/Blogdetails/${id}`)

  }
  const deleteRequest= async () =>{
    const res= await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err))
    const data= await res.data;
    return data;

  }
  const handleDelete=()=>{
    deleteRequest().then(data=>console.log(data)).then(()=>navigate("/Blogs")).then(()=>navigate("/Userblog"))
    .catch(err=>console.log(err))

  }
  return (
    <div>
      {" "}
      <Card
      
        sx={{
          
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #5e290b",
          ":hover": {
            boxShadow: "10px 10px 20px #200c00",
          },
        }}
      > {isUser &&(
        <Box display={'flex'}>
          <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}} ><AutoFixHighIcon color="error" /></IconButton>
          <IconButton  onClick={handleDelete} ><RestoreFromTrashIcon color="error"/></IconButton>
        </Box>
      )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }
          title={<b>{title}</b>}
         
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <hr color="red"/>
          <br/>
          <Typography variant="body2" color="text.secondary">
            <b  >{userName}</b> {":"} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cart;
