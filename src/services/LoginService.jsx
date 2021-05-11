import callApi from './ApiGeneric';

const apiLoginService = {
     async login(identification,password) { 
        const dataInfo = {
            identification,
            password
        };

        let response = {
            result: {},
            error: undefined
        }

        try{
            const {data} = await callApi('Security/authenticate', 'post', dataInfo);
            response.result = data;
        }catch(error){
            response.error = {
                errorCode: 401,
                msg: 'User not authenticated'
            };
        }

        return response;
    }
}

export default apiLoginService;