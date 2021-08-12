import axios from 'axios';
import { getToken } from '../utils/auth';
const access_token = getToken();
const auth_token = access_token ? `Bearer ${access_token}` : '';
    // config.headers.Authorization =  auth_token;
export default axios.create({
    baseURL: `http://localhost:5000`,
    headers: {Authorization: auth_token}
  });