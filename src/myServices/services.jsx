import axios from "axios";
import { URL } from "../URI/uri";
import { users } from "../URI/uri";
import { albums } from "../URI/uri";

export function getUsers() {
  return axios.get(URL + "/" + users).then((resp) => resp.data);
}

export function getAlbums() {
  return axios.get(URL + "/" + albums).then((resp) => resp.data);
}

export function deleteItem(item) {
  return axios.delete(URL + "/users/" + item.id);
}

export function editItem(item) {
  return axios.put(URL + "/users/" + item.id, item, {
    headers: { "Content-Type": "application/json" },
  });}

  export function createItem(item) {
    return axios
      .post(URL + "/users/", item, {
        headers: { "Content-Type": "application/json" },
      })
      .then((item) => item.data);

}
