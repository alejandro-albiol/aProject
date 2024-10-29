import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const publicPath = path.join(__dirname, '../../public');//Indica la ruta desde la que se va a servir el contenido estático, desde el directorio actual (src) hasta el directorio public
