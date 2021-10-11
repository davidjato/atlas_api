import express from 'express';
import cors from 'cors';
import path from 'path';


export default (app) => {

  app.use(cors());

  app.use(express.static(path.join(__dirname, "/../../public/")));

  app.use(
    express.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.use(express.json({ limit: "50mb" }));
};
