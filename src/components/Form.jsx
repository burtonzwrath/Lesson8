import { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, FormLabel, Button, TextField } from "@mui/material";

export default function Form({ selectedUser, onSave }) {
  const [newUser, setNewUser] = useState({ ...selectedUser });

  const onSubmit = (e) => {
    onSave(newUser);
  };

  function onChange(e) {
    const info = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(info);
    console.log(newUser);
  }
  const onLink = () => {
    return <Link to={"/users"}>""</Link>;
  };

  return (
    <FormControl>

        <TextField
          label="Enter name"
          variant="filled"
          color="warning"
          focused
          name="name"
          value={newUser.name}
          onChange={onChange}
          type="text"
        />


        <TextField
          sx={{}}
          label="Enter UserName"
          color="secondary"
          focused
          variant="filled"
          name="username"
          value={newUser.username}
          onChange={onChange}
          type="text"
        />


      <Link style={{ textDecoration: "none", color: "green", marginTop:"20px" }} to={"/users"}>
        <Button
          sx={{ border: "3px solid green", backgroundColor: "lightgreen", color:"green" }}
          variant=""
          onClick={onSubmit}
        >
          {" "}
          Save
        </Button>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "blue", fontSize: "30px", }}
        to={"/users"}
      >
        <Button
          sx={{ color:"red", border: "3px solid red", backgroundColor: "orange" }}
          variant=""
          onClick={onSubmit}
        >
          Cancel
        </Button>
      </Link>
    </FormControl>
  );
}
