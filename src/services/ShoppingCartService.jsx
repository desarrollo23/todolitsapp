import callApi from './ApiGeneric';

const apiShoppingCartService = {
    async create(request){

        const headers = {
            'Authorization': `Bearer ${request.token}`
        };

        try{
            const {data} = await callApi('ShoppingCar/create', 'post', request, headers);

           return data;

        }catch(error){
            throw Error(error);
        }
    },

    async edit(cart, token){

        try{

            const id = cart.id;

            delete cart.id;

            const {data} = await callApi(`ShoppingCar/updateShoppingCar/${id}`,
            'put', cart, { 'Authorization': `Bearer ${token}` });

            return data;
        }catch(error){
            throw Error(error);
        }
    },

    async delete(){

    },

    async getByUser(idUser, token){

        try{
            const {data} = await callApi(`ShoppingCar/getShoppingCars/${idUser}`,
            'get', null, { 'Authorization': `Bearer ${token}` });

           return data;

        }catch(error){
            throw Error(error);
        }
    },

    async getById(id, token){
        try{
            const {data} = await callApi(`ShoppingCar/getById/${id}`,
            'get', null, { 'Authorization': `Bearer ${token}` });

           return data;

        }catch(error){
            throw Error(error);
        }
    }
}

export default apiShoppingCartService;