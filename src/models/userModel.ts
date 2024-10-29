import pool from "../config/dataBase.js";

export async function SaveUser(data:any):Promise<any>{

    const queryString = `INSERT INTO "user" ("userName", "name", "first_surname", "password", "email") VALUES ('${data.username}', '${data.name}', '${data.surname}', '${data.password}','${data.email}')`;//Constante para la consulta a la base de datos
    const result = await pool.query(queryString);//inserta los datos del usuario en la base de datos, se espera a que se complete la operación antes de continuar
    return result;
}

export async function getUsers():Promise<any>{

    const queryString = `SELECT * FROM "user"`;//Constante para la consulta a la base de datos
    const result = await pool.query(queryString);//Realiza la consulta a la base de datos, se espera a que se complete la operación antes de continuar
    return result;
}

export async function getUserById(id:string):Promise<any>{

    const queryString = `SELECT * FROM "user" WHERE "id" = ${id}`;//Constante para la consulta a la base de datos
    const result = await pool.query(queryString);//Realiza la consulta a la base de datos, se espera a que se complete la operación antes de continuar
    return result;
}