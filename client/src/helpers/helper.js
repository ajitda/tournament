import API from "../config/AxiosBase";
import {useEffect, useState} from "react";
import AxiosBase from "../config/AxiosBase";

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

export const usePostApi = (url, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        headers();
        const res = await AxiosBase.post(url, params);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getData();
    return () => {};
  }, [url]);

  return { data, isLoading, error };
}

