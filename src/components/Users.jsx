import { Link } from "react-router-dom";
import UsersList from "./UsersList";

export default function Users({
  users,
  onDeleteItemFunc,
  onEditClick,
  onCreateClick,
}) {
  return (
    <>
      <div>
        <div style={{ fontSize: "20px", marginTop: "40px" }}>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
      </div>
      <h1>Users:</h1>
      <UsersList
        users={users}
        onDeleteItemFunc={onDeleteItemFunc}
        onEditClick={onEditClick}
      />
      <div>
        <Link to={"create"}>
          <button onClick={() => onCreateClick}>Create new user</button>
        </Link>
      </div>
    </>
  );
}
