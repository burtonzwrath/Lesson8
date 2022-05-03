import { Link } from "react-router-dom";

export default function UserEdit({ item, onDeleteItemFunc, onEditClick }) {
  return (
    <div key={item.id}>
      <span key={item.id}>
        {item.name} {item.username}
      </span>
      <Link to={"edit/" + item.id}>
        <button onClick={() => onEditClick(item)}>Edit</button>
      </Link>
      <button onClick={() => onDeleteItemFunc(item)}>Delete</button>
    </div>
  );
}
