import { Link } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

export default function UserEdit({ item, onDeleteItemFunc, onEditClick }) {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px dashed grey",
        display: "flex",
        gap: "10px",
        justifyContent: "flex-end",
      }}
      key={item.id}
    >
      <Typography
        color="blue"
        key={item.id}
        sx={{ fontSize: "20px" }}
        variant="body2"
        display="inline"
      >
        {item.name} {item.username}
      </Typography>
      <Link to={"edit/" + item.id}>
        <Button variant="outlined" onClick={() => onEditClick(item)}>
          Edit
        </Button>
      </Link>
      <Button variant="contained" onClick={() => onDeleteItemFunc(item)}>
        Delete
      </Button>
    </Box>
  );
}
