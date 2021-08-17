import React, { useState, useEffect } from "react";
import AxiosBase from "../../config/AxiosBase";
import { headers } from "../helper";

// This should not be used here because it's basically not working as a hook
// Create new function in helper.js for now
function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        headers();
        const res = await AxiosBase.get(url);
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

export default useFetchApi
export {
  useFetchApi,
}
