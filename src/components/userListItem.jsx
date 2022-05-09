import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import {  Button } from "@mui/material";
export default function UserListItem({ item,removeUser }) {
  return (
    <Box>
      <h1>
        {item.name} {item.username}
      </h1>
      <Link to={"/users/" + item.id}>edit</Link>
     <Button onClick={()=>removeUser(item)}>Delete</Button>

    </Box>
  );
}
