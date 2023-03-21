import express, {json} from 'express';
import dotenv from 'dotenv';
import {getPageController} from './controllers/page.controller';

const app = express();

dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const port = process.env.PORT;

app.use(json());

app.get('/load-page', getPageController)

app.listen(port, ()=>{
    console.log("Servidor ok corriendo en el puerto " + port)
})
