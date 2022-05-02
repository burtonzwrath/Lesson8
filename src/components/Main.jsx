import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <div style={{ fontSize: "30px", marginTop: "40px" }}>
        <div>
          <Link to={"/dashboard"}>Dashboard</Link> |
          <Link to={"/albums"}>Albums</Link> |<Link to={"/users"}>Users</Link>
        </div>
      </div>
    </div>
  );
}
export default Main;
