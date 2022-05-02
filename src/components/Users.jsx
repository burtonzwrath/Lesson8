import { Link } from "react-router-dom";

import UsersList from "./UsersList";

export default function Users() {


  return (
    <>
      <div>
        <div style={{ fontSize: "20px", marginTop: "40px" }}>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
      </div>
      <h1>Users:</h1>
      <UsersList />
      <div>
        <Link to={"create"}>
          <button>Create new user</button>
        </Link>
      </div>
    </>
  );
}
