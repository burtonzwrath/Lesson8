import { useCallback, useEffect, useState } from "react";
import {
  getAlbums,
  getUsers,
  deleteItem,
  createItem,
  editItem,
} from "../myServices/services";

export default function useItems() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  const getNewUsers = useCallback(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const getNewAlbums = useCallback(() => {
    getAlbums().then((data) => setAlbums(data));
  }, []);

  const onDeleteItemFunc = useCallback(
    (user) => {
      deleteItem(user);
      setUsers(users.filter((item) => item.id !== user.id));
    },
    [users, setUsers]
  );

  const onEditFunc = useCallback(
    (user) => {
      editItem(user);
      setUsers(users.map((item) => (item === user ? item : user)));
    },
    [users, setUsers]
  );

  const onCreateFunc = useCallback(
    (user) => {
      createItem(user).then((data) => setUsers([...users, data]));
    },
    [users, setUsers]
  );

  useEffect(() => {
    getNewAlbums();
    getNewUsers();
  }, [getNewAlbums, getNewUsers]);

  return {
    onEditFunc,
    onCreateFunc,
    onDeleteItemFunc,
    users,
    albums,
  };
}
