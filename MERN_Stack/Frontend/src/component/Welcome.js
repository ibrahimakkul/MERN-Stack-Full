import { Box } from '@mui/system'
import React from 'react'
import {Button} from "@mui/material"
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
    <Box
          maxWidth={520}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #5e290b"
          padding={3}
          margin="auto"
          mt={5}
          borderRadius={8}
        >
            <img src='https://cdn.shopify.com/s/files/1/1115/6682/products/indir_8c5d0cb0-8e5d-400e-b14e-fa7fab1cafe2.png?v=1613096959'alt=''/>
           
        </Box>
        <Button 
                
                LinkComponent={Link}
                to="/Auth"
                variant="contained"
                color="warning"
                sx={{ marginLeft: '44%' , borderRadius: 10, mt:3 }}
              >
                My Blog Welcome
              </Button>
    </div>
  )
}

export default Welcome