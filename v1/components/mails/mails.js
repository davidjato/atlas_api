import mailsSenderController from "./controllers/mailsSenderController";
import mailsCRUDController from "./controllers/mailsCRUDController";

export default (app) => {
  app.get("/v1/mails/template", mailsCRUDController);
  app.put("/v1/mails/template", mailsCRUDController);
  app.post("/v1/mails/template", mailsCRUDController);
  app.delete("/v1/mails/template", mailsCRUDController);
  app.post("/v1/mails/send", mailsSenderController);
};
