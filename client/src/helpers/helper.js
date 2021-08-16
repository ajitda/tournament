import API from "../config/AxiosBase";

export const headers = () => {
  const token = localStorage.authToken;
  const bookingToken = localStorage.bookingToken;
  if (token) {
    API.defaults.headers.common["x-access-token"] = token;
    if (bookingToken) {
      API.defaults.headers.common["x-booking-token"] = bookingToken;
    }

    return API;
  } else {
    return API.defaults.headers;
  }
};
