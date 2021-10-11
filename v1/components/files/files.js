import filesController from "./controllers/filesController";


export default (app) => {
  app.get("/v1/files/", filesController);
};
