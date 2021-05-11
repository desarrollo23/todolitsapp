import config from './config';
const axios = require('axios').default;

async function callApi(enpoint, method, data = {}, headers = {}){

    const response = await axios({
        method: method,
        url: `${config.BASE_URL}/${enpoint}`,
        data: data,
        headers: headers
      });

    return response;
}

export default callApi;