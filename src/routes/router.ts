import express from "express";
import path from "path";
import pool from "../dataBase.js";
import { publicPath } from "../config.js";
import { saveUserHandler } from "../handlers/userHandler.js";

export const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(publicPath, 'index.html'));//Sirve el archivo index.html desde el directorio public
  });
  
router.get('/page2', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(publicPath, 'index2.html'));//Sirve el archivo index2.html desde el directorio public
});
  
router.get('/newUser', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(publicPath, 'newUser.html'));//Sirve el archivo newUser.html desde el directorio public
});
  
router.post('/newUser', async (req: express.Request, res: express.Response) => {//async permite que la función pueda esperar a que se complete una operación asíncrona antes de continuar
    //req y res son objetos que representan la solicitud y la respuesta del servidor en la consola del servidor.
    //console.log(req.body);//muestra los datos del cuerpo de la solicitud, formateados como pares clave-valor por el app.use(express.urlencoded({extended: true}))
    //console.log(res.statusCode);//muestra el código de estado de la respuesta, en este caso 201
    //console.log(pool);//muestra el pool de conexión a la base de datos
    //res.send('<h1>Usuario creado</h1> <p>Nombre: ' + req.body.name + '</p> <p>Apellido: ' + req.body.surname + '</p> <p>Nombre de usuario: ' + req.body.username + '</p> <p>Email: ' + req.body.email + '</p>');//configura la respuesta del servidor, en este caso un mensaje de confirmación
    const result = saveUserHandler(req.body);
    res.send(result)
});