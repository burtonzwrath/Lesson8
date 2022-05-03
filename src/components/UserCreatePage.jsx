import Form from "./Form";
export default function UserCreatePage({
  users,
  onSave,
  setUsers,
  selectedUser,
}) {
  return (
    <Form
      selectedUser={selectedUser}
      users={users}
      onSave={onSave}
      setUsers={setUsers}
    />
  );
}
