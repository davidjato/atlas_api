import { mysqlconnection } from "../loaders/mysql_loader";
import dotenv from "dotenv";

dotenv.config();

export const getCRUD = async (identifier, table, req) => {
  return new Promise((resolve) => {
    const identifierValue = req.body[identifier];
    mysqlconnection.query(
      `SELECT * FROM _atlas_.${table} WHERE ${identifier} = '${identifierValue}';`,
      function (err, response, fields) {
        resolve(response);
      }
    );
  });
};
export const postCRUD = async (identifier, table, req) => {
  return new Promise((resolve) => {
    try {
      const identifierValue = req.body[identifier];
      let sql = `UPDATE _atlas_.${table} SET `;
      let keys = Object.keys(req.body[identifier]);
      keys.forEach((element, index) => {
        if (
          typeof req.body[identifier][element] === "object" &&
          req.body[identifier][element] !== null
        )
          sql += element + " = '" + req.body[identifier][element].id + "'";
        else if (req.body[identifier][element] !== null)
          sql += element + " = '" + req.body[identifier][element] + "'";
        else element + " = '" + req.body[identifier][element] + "'";
        if (index < keys.length - 1) sql += ", ";
      });
      sql += " WHERE id = " + req.body[identifier].id;
      console.log(sql);

      mysqlconnection.query(sql, function (err, result, fields) {
        if (err) {
          resolve(`${err} , ${sql}`);
        }
        resolve(req.body[identifier].id);
      });
    } catch (e) {
      resolve(`${e}`);
    }
  });
};
export const putCRUD = async (identifier, table, req) => {
  return new Promise((resolve) => {
    try {
      const identifierValue = req.body[identifier];
      let sql = `INSERT INTO _atlas_.${table} (`;
      let keys = Object.keys(req.body[identifier]);
      keys.forEach((element, index) => {
        sql += element;
        if (index < keys.length - 1) sql += ", ";
        else sql += ")";
      });

      sql += " VALUES (";
      keys.forEach((element, index) => {
        if (
          typeof req.body[identifier][element] === "object" &&
          req.body[identifier][element] !== null
        )
          sql += "'" + req.body[identifier][element].id + "'";
        else if (req.body[identifier][element] !== null)
          sql += "'" + req.body[identifier][element] + "'";
        else sql += "" + req.body[identifier][element] + "";

        if (index < keys.length - 1) sql += ", ";
        else sql += ")";
      });

      console.log(sql);

      mysqlconnection.query(sql, function (err, result, fields) {
        if (err) {
          resolve(`${err} , ${sql}`);
        }
        resolve(result.insertId);
      });
    } catch (e) {
      resolve(`${e}`);
    }
  });
};

export const deleteCRUD = async (table, req) => {
  return new Promise((resolve) => {
    const identifierValue = req.body.id;
    mysqlconnection.query(
      `DELETE FROM _atlas_.${table} WHERE id = ${identifierValue};`,
      function (err, response, fields) {
        resolve(response);
      }
    );
  });
};
