import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import pool from "./configDB.js";

const app = express();
const port = 3000;

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended: true}));//Permite que el servidor pueda entender los datos enviados desde un formulario

const publicPath = path.join(__dirname, '../public');//Indica la ruta desde la que se va a servir el contenido estático, desde el directorio actual (src) hasta el directorio public

app.use(express.static(publicPath));//Sirve contenido estático desde el directorio public

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));//Sirve el archivo index.html desde el directorio public
});

app.get('/page2', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(publicPath, 'index2.html'));//Sirve el archivo index2.html desde el directorio public
});

app.get('/newUser', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(publicPath, 'newUser.html'));//Sirve el archivo newUser.html desde el directorio public
});

app.post('/newUser', async (req: express.Request, res: express.Response) => {//async permite que la función pueda esperar a que se complete una operación asíncrona antes de continuar
  //req y res son objetos que representan la solicitud y la respuesta del servidor en la consola del servidor.
  //console.log(req.body);//muestra los datos del cuerpo de la solicitud, formateados como pares clave-valor por el app.use(express.urlencoded({extended: true}))
  //console.log(res.statusCode);//muestra el código de estado de la respuesta, en este caso 201
  console.log(pool);//muestra el pool de conexión a la base de datos
  res.send('<h1>Usuario creado</h1> <p>Nombre: ' + req.body.name + '</p> <p>Apellido: ' + req.body.surname + '</p> <p>Nombre de usuario: ' + req.body.username + '</p> <p>Email: ' + req.body.email + '</p>');//configura la respuesta del servidor, en este caso un mensaje de confirmación
  const queryString = `INSERT INTO "user" ("userName", "name", "first_surname", "password", "email") VALUES ('${req.body.username}', '${req.body.name}', '${req.body.surname}', '${req.body.password}','${req.body.email}')`;//Constante para la consulta a la base de datos
  const result = await pool.query(queryString);//inserta los datos del usuario en la base de datos, se espera a que se complete la operación antes de continuar
  console.log(result.rows);//muestra el resultado de la operación
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
