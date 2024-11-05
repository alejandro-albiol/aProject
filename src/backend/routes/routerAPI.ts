import express from "express";
import { newUser, showAllUsers, showUserById } from "../controllers/userController.js";
import { User } from "../types/user.js";

const routerAPI = express.Router();
  
routerAPI.post('/newUser', async (req: express.Request, res: express.Response) => {
    const user: User = {userName: req.body.username, name: req.body.name, first_surname: req.body.surname, email: req.body.email, password: req.body.password};
    const result = await newUser(user);
    res.send(result);
});

routerAPI.get('/users', async (req: express.Request, res:express.Response) => {
    const allUsers = await showAllUsers();
    res.send(allUsers)
})

routerAPI.get('/users/:id', async (req: express.Request, res: express.Response) => {
    const userId = req.params.id; // Obtiene el ID del usuario de los parámetros de la ruta
    const user = await showUserById(userId); // Llama a una función para obtener el usuario por ID
    res.send(user); // Envía el usuario encontrado como respuesta
});

export { routerAPI }