import { useState } from "react";

export default function useGetAlbums(cb, defaultValue = []) {
  const [albums, setAlbums] = useState(defaultValue);

  const getNewAlbums = () => {
    cb().then((data) => {
      setAlbums(data);
      return data;
    });
  };

  return {
    albums,
    setAlbums,
    getNewAlbums,
  };
}
