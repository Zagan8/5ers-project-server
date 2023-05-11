import cors from 'cors'
import bodyParser from "body-parser";
import productsRouter from "./routes/products.routes";
import ordersRouter from "./routes/orders.routes";
const express = require('express')
const app = express()
app.use(cors())
app.use(bodyParser.json());

app.use(productsRouter);
app.use(ordersRouter);

app.listen(8080,()=>{
    console.log('listening....')
})