import { Box } from "@mui/material";
import UserListItem from "./userListItem";

export default function UsersList({ users }) {
  return (
    <Box>
      {users.map((item) => (
        <UserListItem item={item} />
      ))}
    </Box>
  );
}
