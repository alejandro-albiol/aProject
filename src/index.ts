import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { router } from "./routes/router.js";
import { publicPath } from "./config.js";


const app = express();
const port = 3000;

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended: true}));//Permite que el servidor pueda entender los datos enviados desde un formulario

app.use(express.static(publicPath));//Sirve contenido estático desde el directorio public

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


