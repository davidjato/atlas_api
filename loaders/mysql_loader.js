import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

export const mysqlconnection = mysql.createConnection({
  host     : process.env.APP_HOST,
  user     : process.env.DATABASE_AUTH_USER,
  password : process.env.DATABASE_AUTH_PASS,
  database : process.env.DATABASE_DDBB
});
