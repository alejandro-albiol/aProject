import express from "express";
import path from "path";
import { publicPath } from "../config/config.js";

export const router = express.Router()

router.get('/newUser', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(publicPath, 'newUser.html'));
  });
  
router.get('/usersManagement', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(publicPath, 'usersManagement.html'));
});