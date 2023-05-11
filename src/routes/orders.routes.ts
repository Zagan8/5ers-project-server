import express from "express";
import {createNewOrder, getAllOrders} from "../controllers/orders.controller";

const ordersRouter = express.Router();
const routePrefix = "/orders";

ordersRouter.post(routePrefix,createNewOrder);
ordersRouter.get(routePrefix,getAllOrders);
export default ordersRouter;