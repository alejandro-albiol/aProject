import pool from "../config/dataBase.js";
import { User } from "../types/user.js";

export async function SaveUser(user:User):Promise<any>{

    const queryString = `INSERT INTO "user" ("userName", "name", "first_surname", "password", "email") VALUES ('${user.userName}', '${user.name}', '${user.first_surname}', '${user.password}','${user.email}')`;//Constante para la consulta a la base de datos
    const result = await pool.query(queryString);//inserta los datos del usuario en la base de datos, se espera a que se complete la operación antes de continuar
    return result.rows;
}

export async function getUsers():Promise<any>{

    const queryString = `SELECT * FROM "user"`;//Constante para la consulta a la base de datos
    const result = await pool.query(queryString);//Realiza la consulta a la base de datos, se espera a que se complete la operación antes de continuar
    return result.rows;
}

export async function getUserById(id:number):Promise<any>{

    const queryString = `SELECT * FROM "user" WHERE "id" = ${id}`;//Constante para la consulta a la base de datos
    const result = await pool.query(queryString);//Realiza la consulta a la base de datos, se espera a que se complete la operación antes de continuar
    return result;
}

export async function deleteUserById(id:number):Promise<any> {
    const queryString = `DELETE FROM  "user" WHERE "id" = ${id}`;
    const result = await pool.query(queryString);
    return result.rows;    
}