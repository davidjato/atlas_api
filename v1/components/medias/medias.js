import mediasController from "./controllers/mediasController";


export default (app) => {
  app.get("/v1/medias/", mediasController);
};
