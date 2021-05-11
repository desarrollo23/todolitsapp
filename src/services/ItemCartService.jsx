import callApi from './ApiGeneric';

const apiItemCartService = {
    async create(request, token){

        try{
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            const {data} = await callApi('Itemcar/create', 'post', request, headers);
            return data;
        }catch(error){
            throw Error(error);
        }
    },

    async updateState(request, token){

        try{
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            const { data } = 
                await callApi(`Itemcar/updateStateItem/${request.id}`, 'put', request, headers);

            return data;
        }catch(error){
            throw Error(error);
        }

    },



    async delete(id, token){

        try{
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            const {data} = await callApi(`Itemcar/deleteItem/${id}`, 'delete', null, headers);
            return data;
        }catch(error){
            throw Error(error);
        }
    }
}

export default apiItemCartService;