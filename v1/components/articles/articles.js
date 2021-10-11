import articlesController from "./controllers/articlesController";


export default (app) => {
  app.get("/v1/articles/", articlesController);
};
