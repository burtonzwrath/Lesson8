import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function AlbumsList({albums}) {
    return (
    <Box>
        <Box style={{ fontSize: "20px", marginTop: "40px" }}>
            <Link to={"/dashboard"}>Dashboard</Link>
        </Box>
        <Typography sx={{ fontSize: "30px" }}>Albums:</Typography>
        <Box>
            {albums.map((item) => (
               <h1 style={{ border: "1px grey solid" }} key={item.id}>
                    album title: {item.title}
                </h1>
            ))}
        </Box>
    </Box>
    )
}