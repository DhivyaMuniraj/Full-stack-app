import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
 
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/register">
        <Button variant="contained">Register</Button>
      </Link>
      <p>Already a user ?</p>
      <Link to="/login">
        <Button variant="contained">Login</Button>
      </Link>
      
    </>
  );
};
export default Home;
