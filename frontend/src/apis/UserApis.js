import Api from './Api';
const UserApis = {};

UserApis.login = async(data) => {
    let url = "/api/users/login";
    const res = await Api.post(url, data)
        .then(response=> {
            console.log(response);
            return response.data;
        }).catch(error=>{ return []; });
    return res;
}

UserApis.getUser = async () => {
    let urlSave= "/api/user";
    const res = await Api.get(urlSave)
        .then(response=> {
            console.log(response.data)
            return response.data;
        }).catch(error=>{ return []; });
        return res;
}

UserApis.logout = async() => {
    const res = await Api.post('/api/logout')
    .then(response=> {
        return response.data;
    }).catch(error=>{ return []; });
    return res;
}

export default UserApis;