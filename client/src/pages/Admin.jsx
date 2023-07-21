import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Admin = () => {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");

  const updateUser = () => {
    fetch("http://localhost:3001/user_update", {
      method: "PATCH",
      body: JSON.stringify({
        exis: {
          emp_id: id1,
        },
        upd: {
          emp_id: id2,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((res) => console.log("res", res));
  };
  return (
    <>
      <h1>Welcome Admin!</h1>
      <TextField
        required
        label="Existing Emp Id"
        onChange={(e) => setId1(e.target.value)}
      />
      <br />
      <br />
      <TextField
        required
        label="Updated Emp Id"
        onChange={(e) => setId2(e.target.value)}
      />
      <br />
      <br />

      <Button variant="contained" onClick={updateUser}>
        Update user
      </Button>
    </>
  );
};

export default Admin;
