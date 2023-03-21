import express, {json} from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config({path:`.env.${process.env.NODE_ENV}`});
const port = process.env.PORT;

app.use(json());

app.get('/hola', (req, res)=>{
    res.status(200).send('Hello World!')
})

app.listen(port, ()=>{
    console.log("Servidor ok corriendo en el puerto " + port)
})
