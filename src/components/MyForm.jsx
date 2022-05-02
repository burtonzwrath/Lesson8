import { useState } from "react";
import useItems from "../hooks/hooks";
import { Link } from "react-router-dom";

export default function MyForm() {
  const { onCreateFunc } = useItems();
  const [user, setUser] = useState({ name: "", company: "", username: "" });

  const onSubmit = (e) => {
    onCreateFunc(user);
    console.log(user);
  };

  function onChange(e) {
    const info = { ...user, [e.target.name]: e.target.value };
    setUser(info);
  }

  return (
    <form>
      <label>
        Enter new name
        <input name="name" onChange={onChange} type="text" />
      </label>
      <label>
        <input name="username" onChange={onChange} type="text" />
      </label>
      <button onClick={onSubmit}>
        <Link to={"/users"}>Save</Link>
      </button>
      <button>Cancel</button>
    </form>
  );
}
