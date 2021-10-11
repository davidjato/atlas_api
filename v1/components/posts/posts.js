import postsController from "./controllers/postsController";


export default (app) => {
  app.get("/v1/posts/", postsController);
};
