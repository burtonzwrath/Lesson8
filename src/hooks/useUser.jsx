import { useEffect, useState } from "react";
import {
  deleteItem,
  editUser,
  getUser,
  createUser,
} from "../myServices/services";

function newUser() {
  return {
    name: "",
    username: "",
    company: "",
    id: "",
  };
}

export default function useUser(id) {
  const [user, setUser] = useState(newUser());

  useEffect(() => {
    getUser(id).then((data) => setUser(data));
  }, [id]);

  const removeUser = (id) => {
    return deleteItem(id)
  };

  const onSave = (user) => {
    if (user.id) {
      return editUser(user);
    } else {
      return createUser(user);
    }
  };

  return {
    onSave,
    user,
    setUser,
    removeUser,
  };
}
