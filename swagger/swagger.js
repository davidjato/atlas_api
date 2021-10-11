import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

dotenv.config();

const host = `http://${process.env.APP_HOST}:${process.env.APP_PORT}`;
const environment = process.env.NODE_ENV;

export default (app) => {
    const options = {
        definition: {
          openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: "David Jato",
              url: "djato.es",
              email: "davidjato@djato.es",
    },
  },
  servers: [
    {
      url: host,
      description: `${environment} server`,
    },
  ],        
},
        apis: ["./v1/components/*/controllers/*.js"],
      };
      
      const specs = swaggerJsdoc(options);
      app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
      );
};

