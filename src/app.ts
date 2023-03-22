import express, {json} from 'express';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';

import {routes} from './routes/index.routes';

const app = express();

dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const port = process.env.PORT;

app.use(express.json());

app.use(routes);

app.listen(port, ()=>{
    console.log("Servidor ok corriendo en el puerto " + port)
})
