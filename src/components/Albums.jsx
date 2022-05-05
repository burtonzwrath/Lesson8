import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useAlbums from "../hooks/useAlbums";
import AlbumsList from "./AlbumsList";

export default function Albums() {
    const {albums,setAlbums}= useAlbums()
  return (
  <AlbumsList albums={albums}/>
  );
}
