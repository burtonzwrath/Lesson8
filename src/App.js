import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Main from "./components/Main";
import Form from "./components/Form";
import useGetUsers from "./hooks/useGetUsers";
import {
  createItem,
  deleteItem,
  editItem,
  getAlbums,
  getUsers,
} from "./myServices/services";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import useGetAlbums from "./hooks/useGetAlbums";

function App() {
  const { users, setUsers, getNewUsers } = useGetUsers(getUsers, []);
  const { albums, setAlbums, getNewAlbums } = useGetAlbums(getAlbums, []);

  const [selectedUser, setSelectedUser] = useState(newUser());

  function newUser() {
    return {
      name: "",
      username: "",
      company: "",
      id: "",
    };
  }

  useEffect(() => {
    getNewUsers();
    getNewAlbums();
  }, []);

  const onDeleteItemFunc = (user) => {
    deleteItem(user);
    setUsers(users.filter((item) => item.id !== user.id));
  };

  const onEditFunc = (user) => {
    editItem(user);
    setUsers(users.map((item) => (item === user ? user : item)));
  };

  const onEditClick = (user) => {
    setSelectedUser(user);
  };

  const onCreateFunc = (user) => {
    createItem(user);
    setUsers([...users, user]);
  };

  const onSave = (user) => {
    if (user.id) {
      onEditFunc(user);
      setUsers(users.map((item) => (item.id === user.id ? user : item)));
    } else {
      onCreateFunc(user);
    }
  };

  return (
    <Container className="App">
      <Box>
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Main />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route
              path={"/users"}
              element={
                <Users
                  onEditClick={onEditClick}
                  onDeleteItemFunc={onDeleteItemFunc}
                  users={users}
                  selectedUser={selectedUser}
                />
              }
            />
            <Route path={"/albums"} element={<Albums albums={albums} />} />
            <Route
              path={"/users/create"}
              element={
                <Form
                  selectedUser={selectedUser}
                  onCreateFunc={onCreateFunc}
                  users={users}
                  setUsers={setUsers}
                  onSave={onSave}
                />
              }
            />
            } />
            <Route
              path={"/users/edit/:id"}
              element={
                <Form
                  onEditFunc={onEditFunc}
                  users={users}
                  onSave={onSave}
                  setUsers={setUsers}
                  selectedUser={selectedUser}
                />
              }
            />
            } /> } />
          </Routes>
        </BrowserRouter>
      </Box>
    </Container>
  );
}

export default App;
