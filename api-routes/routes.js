
import apiDocs from '../swagger/swagger';
import v1 from '../v1/v1';
 
export default (app) => {
  apiDocs(app);
  v1(app);
};
