import "./App.css";
import Dashboard from "./components/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Main from "./components/Main";
import MyForm from "./components/MyForm";

function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route
                            exact
                            path={"/"}
                            element={ <Main  />}
                       />
                        <Route
                            path={"/dashboard"}
                            element={ <Dashboard  />}
                        />
                        <Route
                            path={"/users"}
                            element={ <Users  />}
                        />
                        <Route
                            path={"/albums"}
                            element={ <Albums  />}
                        />
                        <Route
                            path={"/users/create"}
                            element={ <MyForm/>}
                            />}
                        />
                        <Route
                            path={"/users/edit"}
                            element={ <MyForm/>}
                        />}
                        />

                    </Routes>

                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

