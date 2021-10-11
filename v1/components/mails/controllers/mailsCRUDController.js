import {
  getCRUD,
  putCRUD,
  deleteCRUD,
  postCRUD,
} from "../../../../utils/crud-utils";
import dotenv from "dotenv";

dotenv.config();

const sendResponse = (res, code, data, cacheData) => {
  res.status(code).send({
    data: data,
    cacheData,
  });
};

export default async (req, res, next) => {
  let response = {};
  switch (req.method) {
    case "GET":
      /**
     * @swagger
     * /v1/mails/template:
     *   get:
     *     tags:
     *       - name: mails     
     *     summary: Get a mail template from database.
     *     description: Endpoint that return a template by reference.
     *     parameters:
     *       - in: body
     *         name: reference
     *         description: Template that the api return to us.
     *         schema:
     *           type: string
     *         example: testtemplate
     *         required: true
     *     responses:
     *       200:
     *         description: Template Found it and return in the response.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     htmlcontent:
     *                         type: string
     *                         description: Html Context
     *        
     *       403:
     *         description: The template wasnt found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     error_description:
     *                         type: string
     *                         description: API error info

    */
      response = await getCRUD("reference", "atlas_mail_templates", req);
      sendResponse(
        res,
        200,
        { template: response[0].template, message: "Template Found it" },
        { responseCached: false }
      );

      break;

    case "POST":
      /**
     * @swagger
     * /v1/mails/template:
     *   post:
     *     tags:
     *       - name: mails     
     *     summary: Update a mail template from database.
     *     description: Endpoint that return a template by reference.
     *     parameters:
     *       - in: body
     *         name: template
     *         description: Template that the api return to us.
     *         schema:
     *           type: string
     *         example: testtemplate
     *         required: true
     *     responses:
     *       200:
     *         description: Template Found it and return in the response.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     htmlcontent:
     *                         type: string
     *                         description: Html Context
     *        
     *       403:
     *         description: The template wasnt found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     error_description:
     *                         type: string
     *                         description: API error info

    */
      response = await postCRUD("mail", "atlas_mail_templates", req);
      if (!isNaN(response))
        sendResponse(
          res,
          200,
          { id: response, message: `Template ${response} Updated` },
          { responseCached: false }
        );
      else
        sendResponse(
          res,
          500,
          {
            message: "Template didnt insert check the logs",
            error_description: response,
          },
          { responseCached: false }
        );
      break;

    case "PUT":
      /**
     * @swagger
     * /v1/mails/template:
     *   put:
     *     tags:
     *       - name: mails     
     *     summary: Create a mail template from database.
     *     description: Endpoint that return a template by reference.
     *     parameters:
     *       - in: body
     *         name: template
     *         description: Template that the api return to us.
     *         schema:
     *           type: string
     *         example: testtemplate
     *         required: true
     *     responses:
     *       200:
     *         description: Template Found it and return in the response.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     htmlcontent:
     *                         type: string
     *                         description: Html Context
     *        
     *       403:
     *         description: The template wasnt found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     error_description:
     *                         type: string
     *                         description: API error info

    */
      response = await putCRUD("mail", "atlas_mail_templates", req);
      if (!isNaN(response))
        sendResponse(
          res,
          200,
          { id: response, message: `Template ${response} Inserted` },
          { responseCached: false }
        );
      else
        sendResponse(
          res,
          500,
          {
            message: "Template didnt insert check the logs",
            error_description: response,
          },
          { responseCached: false }
        );

      break;

    case "DELETE":
      /**
     * @swagger
     * /v1/mails/template:
     *   delete:
     *     tags:
     *       - name: mails      
     *     summary: Delete a mail template from database.
     *     description: Endpoint that return a template by reference.
     *     parameters:
     *       - in: body
     *         name: id
     *         description: ID Template that the api return to us.
     *         schema:
     *           type: integer
     *         example: 1
     *         required: true
     *     responses:
     *       200:
     *         description: Template Found it and return in the response.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     htmlcontent:
     *                         type: string
     *                         description: Html Context
     *        
     *       403:
     *         description: The template wasnt found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                   type: object
     *                   properties:
     *                     message:
     *                         type: string
     *                         description: Response message
     *                     error_description:
     *                         type: string
     *                         description: API error info

    */
      response = await deleteCRUD("atlas_mail_templates", req);
      sendResponse(
        res,
        200,
        { id: req.body.id, message: `Template ${req.body.id} Deleted` },
        { responseCached: false }
      );

      break;
  }
};
