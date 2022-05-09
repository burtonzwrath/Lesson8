import Form from "./Form";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function UserEditPage() {
  const params = useParams();
  const { user, onSave ,removeUser} = useUser(params.id);
  return <Form user={user} onSave={onSave} removeUser={removeUser} />;
}
