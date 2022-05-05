import { useEffect, useState } from "react";
import { getAlbums } from "../myServices/services";

export default function useAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then((data) => setAlbums(data));
  }, []);

  return {
    albums,
    setAlbums,
  };
}
