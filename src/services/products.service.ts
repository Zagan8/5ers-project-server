import WooCommerce from "../providers/wooCommers-provider";


const productsService = {
    getAllProducts: async ()=>{
       const products = await WooCommerce.get("products");
      return products.data;


    }

};

export default productsService;