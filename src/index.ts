import express from "express";
import { router } from "./routes/router.js";
import { publicPath } from "./config/config.js";


const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));//Middleware para obtener el formulario y ponerlo en el body de la response

app.use(express.static(publicPath));//Sirve contenido estático desde el directorio public

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


