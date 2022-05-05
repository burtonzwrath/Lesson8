import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, Button, TextField } from "@mui/material";

export default function Form({ user, onSave }) {
  const [newUser, setNewUser] = useState({ ...user });
const navigate= useNavigate()

  useEffect(() => {
    setNewUser(user);
  }, [user]);

  function onChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(newUser).then(navigate("/users"));
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

      <Link
        style={{ textDecoration: "none", color: "green", marginTop: "20px" }}
        to={"/users"}
      >
        <Button
          sx={{
            border: "3px solid green",
            backgroundColor: "lightgreen",
            color: "green",
          }}
          variant=""
          onClick={onSubmit}
        >
          {" "}
          Save
        </Button>
      </Link>

      <Link
        style={{ textDecoration: "none", color: "blue", fontSize: "30px" }}
        to={"/users"}
      >
        <Button
          sx={{
            color: "red",
            border: "3px solid red",
            backgroundColor: "orange",
          }}
          variant=""
          onClick={onSubmit}
        >
          Cancel
        </Button>
      </Link>
    </FormControl>
  );
}
