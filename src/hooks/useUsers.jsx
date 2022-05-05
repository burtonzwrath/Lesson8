import { useEffect, useState } from "react";
import { deleteItem, getUsers } from "../myServices/services";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  function removeUser(id) {
    deleteItem(id).then(() => {
      setUsers((users) => users.filter((user) => user.id !== id));
    });
  }

  return {
    users,
    setUsers,
    removeUser,
  };
}
