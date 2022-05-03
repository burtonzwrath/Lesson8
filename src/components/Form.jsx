import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form({ selectedUser, onSave }) {
  const [newUser, setNewUser] = useState({ ...selectedUser });

  const onSubmit = (e) => {
    onSave(newUser);
  };

  function onChange(e) {
    const info = { ...newUser, [e.target.name]: e.target.value };
    setNewUser(info);
    console.log(newUser);
  }

  return (
    <form>
      <label>
        Enter name
        <input
          name="name"
          value={newUser.name}
          onChange={onChange}
          type="text"
        />
      </label>
      <label>
        <input
          name="username"
          value={newUser.username}
          onChange={onChange}
          type="text"
        />
      </label>
      <button onClick={onSubmit}>
        <Link to={"/users"}>Save</Link>
      </button>
      <button>Cancel</button>
    </form>
  );
}
