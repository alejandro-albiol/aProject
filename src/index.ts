import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '../public');//Indica la ruta desde la que se va a servir el contenido estático, desde el directorio actual (src) hasta el directorio public

app.use(express.static(publicPath));//Sirve contenido estático desde el directorio public

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));//Sirve el archivo index.html desde el directorio public
});

app.get('/page2', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(publicPath, 'index2.html'));//Sirve el archivo index2.html desde el directorio public
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
