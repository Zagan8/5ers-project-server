import {Request, Response} from "express";
import productsService from "../services/products.service";


 async function getAllProducts(req: Request, res: Response) {
    try {
        const products = await productsService.getAllProducts();
        res.send(products);
    } catch (e) {
        console.error(`failed to get all products with error ${JSON.stringify(e)}`);
        res.sendStatus(400);
    }
}

export  {getAllProducts}