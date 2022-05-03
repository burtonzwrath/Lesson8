import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Albums({ albums }) {
  return (
    <Box>
      <Box style={{ fontSize: "20px", marginTop: "40px" }}>
        <Link to={"/dashboard"}>Dashboard</Link>
      </Box>
      <Typography sx={{ fontSize: "30px" }}>Albums:</Typography>
      <Box>
        {albums.map((item) => (
          <Box style={{ border: "1px grey solid" }} key={item.id}>
            album title: <h3>{item.title}</h3>
            album id: <h4>{item.id}</h4>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
