import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          borderBottom: "3px black solid",
          fontSize: "20px",
        }}
      >
        <Link to={"/users"}>Users</Link> |<Link to={"/albums"}>Albums</Link>
      </div>
      <h1>Dashboard</h1>
    </div>
  );
}
