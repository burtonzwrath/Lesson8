import { Link } from "react-router-dom";

import useItems from "../hooks/hooks";

export default function Albums() {
  const { albums } = useItems();
  return (
    <div>
      <div style={{ fontSize: "20px", marginTop: "40px" }}>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <h1>Albums:</h1>
      <div>
        {albums.map((item) => (
          <div style={{ border: "1px grey solid" }} key={item.id}>
            album title: <h3>{item.title}</h3>
            album id: <h4>{item.id}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
