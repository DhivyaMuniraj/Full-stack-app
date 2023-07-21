import axios from "axios";
import React from "react";
import { useContext } from "react";
import { ContextElem } from "../app/App";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const UserLogin = () => {
  const { setName } = useContext(ContextElem);
  const { setPass } = useContext(ContextElem);
  const { name } = useContext(ContextElem);
  const { pass } = useContext(ContextElem);

  const [validateField, setValidateField] = useState({
    name: null,
    password: null,
  });

  const validateName = (e) => {
    let targetVal = e.target.value;
    const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    if (targetVal == "" || pattern.test(targetVal) == false) {
      setName("");
      setValidateField({
        name: true,
      });
    } else {
      setName(targetVal);
      setValidateField({
        name: false,
      });
    }
  };
  const validatePassword = (e) => {
    let targetVal = e.target.value;
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pattern.test(targetVal) == false) {
      setPass("");
      setValidateField({
        password: true,
      });
    } else {
      setPass(targetVal);
      setValidateField({
        password: false,
      });
    }
  };

  const navigate = useNavigate();
  const checkAllFields = () => {
    if (name == "" && pass == "") {
      setValidateField({
        name: true,
        password: true,
      });
    } else {
      axios
        .get(`http://localhost:3001/user/${name}`)
        .then((res) => {
          if (res.data[0].password == pass) {
            window.localStorage.setItem("name", name);
            navigate("/user");
          } else {
            setValidateField({
              name: false,
              password: true,
            });
          }
        })
        .catch(() => {
          setTimeout(() => {
            alert("This user does not exist");
          }, 3001);
        });
    }
  };

  return (
    <>
      <h1>User Login</h1>
      <TextField
        required
        error={validateField.name}
        label="User Name"
        onBlur={(e) => validateName(e)}
        onChange={(e) => setName(e.target.value)}
        helperText={validateField.name ? "Enter valid name" : ""}
      />
      <br />
      <br />
      <TextField
        required
        type="password"
        error={validateField.password}
        label="Set Password"
        onBlur={(e) => validatePassword(e)}
        onChange={(e) => setPass(e.target.value)}
        helperText={validateField.password ? "Enter valid password" : ""}
      />
      <br />
      <br />

      <Button variant="contained" onClick={checkAllFields}>
        LOGIN
      </Button>
    </>
  );
};

export default UserLogin;
