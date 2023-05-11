import {Request, Response} from "express";
import ordersService from "../services/orders.service";


async function createNewOrder(req: Request, res: Response) {
    try {
        await ordersService.createOrder(req.body);
        res.sendStatus(200);
    } catch (e) {
        console.error(`failed to create order with error ${JSON.stringify(e)}`);
        res.sendStatus(400);
    }
}
async function getAllOrders(req: Request, res: Response) {
    try {
       const orders = await ordersService.getOrders();
        res.send(orders);
    } catch (e) {
        console.error(`failed to get all orders with error${JSON.stringify(e)}`);
        res.sendStatus(400);
    }
}

export  {createNewOrder,getAllOrders}