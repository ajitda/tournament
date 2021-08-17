import {headers} from "../helpers/helper";
import axios from "axios";

const AxiosBase = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    responseType: "json",
});

export const getHeaders = () => {
    const token = localStorage.authToken;
    const bookingToken = localStorage.bookingToken;
    if (token) {
        AxiosBase.defaults.headers.common["x-access-token"] = token;
        if (bookingToken) {
            AxiosBase.defaults.headers.common["x-booking-token"] = bookingToken;
        }

        return AxiosBase;
    } else {
        return AxiosBase.defaults.headers;
    }
};


export async function usePostApi (url, params) {
    let data, error;

    try {
        getHeaders();
        await AxiosBase.post(url, params).then((result) => {
            data = result.data
        }).catch((er) => {
            error = er
        });
    } catch (err) {
        error = err;
    }

    if (!data) {
        error = 'No data'
    }

    return { data, error };
}
