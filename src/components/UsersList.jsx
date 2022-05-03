import UserEdit from "./UserEdit";

export default function UsersList({ users, onDeleteItemFunc, onEditClick }) {
  return (
    <div>
      {users.map((item) => (
        <UserEdit
          key={item.id}
          item={item}
          onDeleteItemFunc={onDeleteItemFunc}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
}
