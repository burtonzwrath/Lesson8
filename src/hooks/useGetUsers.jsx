import { useState } from "react";

export default function useGetUsers(cb, defaultValue = []) {
  const [users, setUsers] = useState(defaultValue);

  const getNewUsers = () => {
    cb().then((data) => {
      setUsers(data);
      return data;
    });
  };

  return {
    users,
    setUsers,
    getNewUsers,
  };
}
