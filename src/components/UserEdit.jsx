import { Link } from "react-router-dom";

export default function UserEdit({ item, onDeleteItemFunc, onEditFunc }) {
  return (
    <div key={item.id}>
      <span key={item.id}>{item.name}</span>
      <Link to={"edit"}>
        <button onClick={() => onEditFunc(item)}>Edit</button>
      </Link>
      <button onClick={() => onDeleteItemFunc(item)}>Delete</button>
    </div>
  );
}
