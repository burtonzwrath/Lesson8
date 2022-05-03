// import useGetUsers from "../hooks/useGetUsers";
// import {createItem, deleteItem, editItem, getUsers} from "../myServices/services";
// import {useEffect, useState} from "react";
// import functionContext from "../context/functionContext"
//
// export default function FunctionProvider({children}){
//
// const { users, setUsers, getNewUsers } = useGetUsers(getUsers, []);
//
// const [selectedUser, setSelectedUser] = useState(newUser());
//
// function newUser() {
//     return {
//         name: "",
//         username: "",
//         company: "",
//         id: "",
//     };
// }
//
// useEffect(() => {
//     getNewUsers();
// }, []);
//
// const onDeleteItemFunc = (user) => {
//     deleteItem(user);
//     setUsers(users.filter((item) => item.id !== user.id));
// };
//
// const onEditFunc = (user) => {
//     editItem(user);
//     setUsers(users.map((item) => (item === user ? user : item)));
// };
//
// const onEditClick = (user) => {
//     setSelectedUser(user);
// };
//
// const onCreateFunc = (user) => {
//     createItem(user);
//     setUsers([...users, user]);
// };
//
// const onSave = (user) => {
//     if (user.id) {
//         onEditFunc(user);
//         setUsers(users.map((item) => (item.id === user.id ? user : item)));
//     } else {
//         onCreateFunc(user);
//     }
// };
//
//
//
// return (
//     <functionContext.Provider value={{users,setUsers,onDeleteItemFunc,onEditFunc,onEditClick,onCreateFunc,onSave,selectedUser, setSelectedUser}} >{children}</functionContext.Provider>)
// }
