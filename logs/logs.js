import morgan from 'morgan';

export default (app) => {
 
  app.use(morgan('METHOD: :method, URL: :url, STATUS: :status, CONTENT LENGTH: :res[content-length], RESPONSE TIME: :response-time ms'));
  
};
