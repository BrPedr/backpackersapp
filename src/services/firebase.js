import axios from "axios"

export const firebaseAPI = axios.create({
  baseURL: "https://firestore.googleapis.com/v1/",
  Authorization: {
    Bearer: "",
  },
});