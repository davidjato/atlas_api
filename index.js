import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import https from 'https';


import config from './config/config';
import logs from './logs/logs';
import router from "./api-routes/routes";

dotenv.config();

const app = express();
const host = process.env.APP_HOST;
const port = process.env.APP_PORT || 3010;

//CONFIGURACIÓN DE NODE
config(app);
//CONFIGURACIÓN DE LOS LOGS
logs(app);
//ENRUTAMIENTO
router(app);

app.get('/', function (req, res) {
    res.status(200).send({
        message: 'GET DE PRUEBAS 2',
        code: 200
    });
});

const httpServer = http.createServer(app);

const server = httpServer.listen(port, function () {
    console.log(`App listening on port ${port} => ${host}:${port}`);
});

module.exports = server;