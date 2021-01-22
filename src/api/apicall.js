import { api } from "../Backend";

export const getPhotos = () => {
  return fetch(`${api}get/all`, {
    method: "GET",
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
