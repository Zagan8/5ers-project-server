import express from "express";
import {getAllProducts} from '../controllers/products.controller'

const productsRouter = express.Router();
const routePrefix = "/products";

productsRouter.get(routePrefix, getAllProducts);

export default productsRouter;