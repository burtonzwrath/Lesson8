import UserEdit from "./UserEdit";
import useItems from "../hooks/hooks";

export default function UsersList() {
  const { users, onDeleteItemFunc, onEditFunc  } = useItems();

  return (
    <div>
      {users.map((item) => (
        <UserEdit key={item.id} item={item}  onDeleteItemFunc={onDeleteItemFunc} onEditFunc={onEditFunc} />
      ))}
    </div>
  );
}
