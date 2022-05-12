import React from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";


function Header() {
  
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  const dispath = useDispatch();
  const [value, setValue] = useState();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <AppBar 
   
      position="sticky"
      sx={{
        boxShadow:"10px 10px 20px #5e290b",
        background:
          " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(145,150,73,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography fontFamily={'fantasy'} variant="h4">MyBlog {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}</Typography>
        {isLoggedIn && (
          <Box display="flex" ml={"auto"} mr={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab  LinkComponent={Link} to="/blogs" label="Blogs" />
              <Tab LinkComponent={Link} to="/Userblog" label="Blog Me" />
              <Tab LinkComponent={Link} to="/Addblog" label="Add Blog" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" ml="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/Auth"
                variant="contained"
                color="warning"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Login
              </Button>
              
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/"
              variant="contained"
              color="warning"
              sx={{ margin: 1, borderRadius: 10 }}
              
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
