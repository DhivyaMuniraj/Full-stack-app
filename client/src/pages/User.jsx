import React from "react";
import { ContextElem } from "../app/App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableContainer } from "@mui/material";

const User = () => {
  const { user } = useContext(ContextElem);
  const { setUser } = useContext(ContextElem);
  const { logoutUser } = useContext(ContextElem);

  let name2 = window.localStorage.getItem("name");

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/user/${name2}`)
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch(() => {
  //       console.log("FAILED");
  //     });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setUser(res.data));
  }, []);

  return (
    <>
      {name2 ? (
        <>
          <h1>Welcome ! {name2}</h1>
          {user.length > 0 ? (
            <>
              <TableContainer sx={{ maxHeight: 300, maxWidth: 700 }}>
                <Table stickyHeader={true} sx={{ backgroundColor: "white" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Id</TableCell>
                      <TableCell>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.map((item) => {
                      return (
                        <TableRow>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.emp_id}</TableCell>
                          <TableCell>{item.email}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              <br />
              <Link to={`/`}>
                <Button variant="contained" onClick={logoutUser}>
                  LOGOUT
                </Button>
              </Link>{" "}
              <br />
              <br />
              <Link to="/sample">
                <Button variant="contained">SAMPLE</Button>
              </Link>
            </>
          ) : (
            <>
              <h1>Loading</h1>
            </>
          )}
        </>
      ) : (
        <>
          {" "}
          <h1>
            You have logged out <Link to="/login">Login here</Link> to continue
          </h1>
        </>
      )}
    </>
  );
};

export default User;
