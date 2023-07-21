import React from "react";
import axios from "axios";
import { ContextElem } from "../app/App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const Register = () => {
  const { name } = useContext(ContextElem);
  const { setName } = useContext(ContextElem);
  const { email } = useContext(ContextElem);
  const { setEmail } = useContext(ContextElem);
  const { pass } = useContext(ContextElem);
  const { setPass } = useContext(ContextElem);
  const { empId } = useContext(ContextElem);
  const { setEmpId } = useContext(ContextElem);
  const { user } = useContext(ContextElem);
  const { setUser } = useContext(ContextElem);

  const navigate = useNavigate();

  const [validateField, setValidateField] = useState({
    name: null,
    id: null,
    email: null,
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

  const validateId = (e) => {
    let targetVal = e.target.value;
    const pattern = /^\d{4}$/;
    if (pattern.test(targetVal) == false) {
      setEmpId("");
      setValidateField({
        id: true,
      });
    } else {
      setEmpId(targetVal);
      setValidateField({
        id: false,
      });
    }
  };

  const validateEmail = (e) => {
    let targetVal = e.target.value;
    const pattern = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (pattern.test(targetVal) == false) {
      setEmail("");
      setValidateField({
        email: true,
      });
    } else {
      setEmail(targetVal);
      setValidateField({
        email: false,
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

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setUser(res.data));
  }, []);

  const checkAllFields = () => {
    let count = 0;
    if (name != "" && empId != "" && email != "" && pass != "") {
      user.map((item) => {
        if (item.emp_id == empId) {
          count = 1;
        }
      });
      if (count !== 1) {
        console.log("emp", empId);
        console.log("COUNT", count);
        axios
          .post("http://localhost:3001/add_user", {
            name: name,
            emp_id: empId,
            email: email,
            password: pass,
          })
          .then(console.log("Added Data"));
        alert("Account created successfully");
        navigate("/login");
        setName("");
        setEmpId("");
        setEmail("");
        setPass("");
      } else {
        alert("This account exists already");
      }
    } else {
      window.alert("Enter Details correctly");
      setValidateField({
        name: true,
        id: true,
        email: true,
        password: true,
      });
    }
  };

  return (
    <>
      <h1>Register Here</h1>

      <TextField
        required
        error={validateField.name}
        label="User Name"
        onBlur={(e) => validateName(e)}
        onChange={(e) => validateName(e)}
        helperText={validateField.name ? "Enter valid name" : ""}
      />
      <br />
      <br />
      <TextField
        required
        type="number"
        error={validateField.id}
        label="Employee Id"
        onBlur={(e) => validateId(e)}
        onChange={(e) => validateId(e)}
        helperText={validateField.id ? "Enter valid Id" : ""}
      />

      <br />
      <br />
      <TextField
        required
        type="email"
        error={validateField.email}
        label="Email"
        onBlur={(e) => validateEmail(e)}
        onChange={(e) => validateEmail(e)}
        helperText={validateField.email ? "Enter valid email" : ""}
      />

      <br />
      <br />
      <TextField
        required
        type="password"
        error={validateField.password}
        label="Set Password"
        onBlur={(e) => validatePassword(e)}
        onChange={(e) => validatePassword(e)}
        helperText={validateField.password ? "Enter valid password" : ""}
      />

      <br />
      <br />

      <Button variant="contained" onClick={checkAllFields}>
        REGISTER
      </Button>
    </>
  );
};

export default Register;
