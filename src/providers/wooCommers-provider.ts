const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
    url: 'http://ttpdevstore.3.235.126.21.nip.io', // Your store URL
    consumerKey: 'ck_28e54e0fb42c9a91e321732ffcdb0268c2e90485', // Your consumer key
    consumerSecret: 'cs_f3744ee04690cf78def142496a70201315a24699', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
});

export default WooCommerce;