import axios from 'axios';
import {getToken} from '../utils/auth';

const UserApis = {};

UserApis.login = async(data) => {
    let url = "/api/login";
    const res = await axios.post(url, data)
        .then(response=> {
            return response.data;
        }).catch(error=>{ return []; });
    return res;
}

UserApis.getUser = async () => {
    let urlSave= "/api/user";
    const res = await axios.get(urlSave)
        .then(response=> {
            console.log(response.data)
            return response.data;
        }).catch(error=>{ return []; });
        return res;
}

UserApis.logout = async() => {
    const res = await axios.post('/api/logout')
    .then(response=> {
        return response.data;
    }).catch(error=>{ return []; });
    return res;
}

export default UserApis;