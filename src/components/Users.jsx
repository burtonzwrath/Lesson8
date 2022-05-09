import { Link } from "react-router-dom";
import UsersList from "./UsersList";
import { Container, Typography, Button, Box } from "@mui/material";
import useUsers from "../hooks/useUsers";

export default function Users() {
  const { users, removeUser } = useUsers();
  return (
    <Container>
      <Box>
        <Box style={{ fontSize: "20px", marginTop: "40px" }}>
          <Link to={"/dashboard"}>Dashboard</Link>
        </Box>
      </Box>
      <Typography variant="h2" component="h2" sx={{ color: "blue" }}>
        Users:
      </Typography>
      <UsersList users={users} removeUser={removeUser} />
      <Box sx={{ margin: "20px", backgroundColor: "", borderRadius: "10px" }}>
        <Link to={"create"}>Create new user</Link>
      </Box>
    </Container>
  );
}
