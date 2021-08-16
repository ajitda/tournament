import Axios from "axios";
export default Axios.create({
  // baseURL: "https://myclouddoc.com/api/v1",
  baseURL: "http://localhost:4000/api/v1",
});

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    Axios.defaults.headers.common["x-access-token"] = token;
  } else {
    // Delete auth header
    delete Axios.defaults.headers.common["x-access-token"];
  }
};
