import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config()

const pool = mysql2.createPool({
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password:process.env.DB_PW,
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT)
})
const database = pool.promise();
export default database