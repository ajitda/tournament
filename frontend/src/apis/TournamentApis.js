import Api from './Api';
const TournamentApis = {};

TournamentApis.index = async(data) => {
    let url = "/api/tournaments/";
    const res = await Api.get(url, data)
        .then(response=> {
            console.log(response);
            return response.data;
        }).catch(error=>{ return []; });
    return res;
}

TournamentApis.store = async(data) => {
    let url = "/api/tournaments/create";
    const res = await Api.post(url, data)
        .then(response=> {
            return response.data;
        }).catch(error=>{ return []; });
    return res;
}

TournamentApis.update = async (data,id) => {
    let urlUpdate = "/api/tournaments/"+id+"?_method=PUT";
    const res = await Api
        .put(urlUpdate, data)
        .then(response => {
            console.log(`response.data.data`, response.data)
            return response.data;
        })
        .catch(error => {
            return [];
        });
    return res;
};


TournamentApis.delete = async (data) => {
    const urlDelete = "/api/tournaments/"+data._id;
    const res = await Api.delete(urlDelete, data)
    .then(response=> {
      return response.data;
    }).catch(error=>{ return error; })
    return res;
  }

export default TournamentApis;