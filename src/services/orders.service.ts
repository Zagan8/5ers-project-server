import WooCommerce from "../providers/wooCommers-provider";


const ordersService = {
    createOrder: async (order: any)=>{

        const orders = await WooCommerce.post('orders', order);
        return orders.data;

    }  ,  getOrders: async ()=>{

        const orders = await WooCommerce.get('orders');
        return orders.data;
    }

};

export default ordersService;