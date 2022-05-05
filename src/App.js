import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Main from "./components/Main";

import { Box, Container } from "@mui/material";
import UserEditPage from "./components/UserEditPage";
import UserCreatePage from "./components/UserCreatePage";

function App() {

  return (
    <Container className="App">
      <Box>
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Main />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/users"} element={<Users />} />
            <Route path={"/albums"} element={<Albums  />} />
            <Route path={"/users/create"} element={<UserCreatePage />} />
            <Route path={"/users/:id"} element={<UserEditPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Container>
  );
}

export default App;
