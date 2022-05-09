import Form from "./Form";
import useUser from "../hooks/useUser";
export default function UserCreatePage() {
  const { user, onSave,removeUser } = useUser();
  return <Form user={user} onSave={onSave} removeUser={removeUser}/>;
}
