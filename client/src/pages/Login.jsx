import axios from "axios";
import React from "react";
import { useContext } from "react";
import { ContextElem } from "../app/App";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <>
      <Link to="/login/admin">
        <Button variant="contained">Admin Login</Button>
      </Link>
      <br /> <br />
      <Link to="/login/user">
        <Button variant="contained">User Login</Button>
      </Link>
    </>
  );
};

export default Login;
