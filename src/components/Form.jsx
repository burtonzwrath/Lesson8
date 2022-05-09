import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RLink } from "react-router-dom";
import { FormControl, Button, TextField } from "@mui/material";
import { Link } from "@mui/material";

export default function Form({ user, onSave, removeUser }) {
  const [newUser, setNewUser] = useState({ ...user });
  const navigate = useNavigate();

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

  function userDelete(){
      removeUser().then(()=>navigate("/users"))
  }

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

      <Button onClick={onSubmit}>Save</Button>

      <RLink
        link={Link}
        style={{ textDecoration: "none", color: "blue", fontSize: "30px" }}
        to={"/users"}
      >
        Cancel
      </RLink>

      <Button onClick={userDelete}>Delete</Button>

    </FormControl>
  );
}
