import express, {json} from 'express';

const app = express();

const port = 3232;

app.use(json());

app.get('/hola', (req, res)=>{
    res.status(200).send('Hello World!')
})

app.listen(port, ()=>{
    console.log("Servidor ok corriendo en el puerto " + port)
})
