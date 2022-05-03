import UserEdit from "./UserEdit";
import { Box } from "@mui/material";

export default function UsersList({ users, onDeleteItemFunc, onEditClick }) {
  return (
    <Box>
      {users.map((item) => (
        <UserEdit
          key={item.id}
          item={item}
          onDeleteItemFunc={onDeleteItemFunc}
          onEditClick={onEditClick}
        />
      ))}
    </Box>
  );
}
