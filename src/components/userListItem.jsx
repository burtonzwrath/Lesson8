import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function UserListItem({ item }) {
  return (
    <Box>
      <h1>
        {item.name} {item.username}
      </h1>
      <Link to={"/users/" + item.id}>edit</Link>
    </Box>
  );
}
