import { useCallback, useEffect, useState } from "react";
import { getAlbums, getUsers } from "../myServices/services";

export default function useGetAlbums() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);



  const getNewAlbums = useCallback(() => {
    getAlbums().then((data) => setAlbums(data));
  }, []);

  useEffect(() => {
    getNewAlbums();
    getNewUsers();
  }, [getNewAlbums, getNewUsers]);
}
