import { transport } from "../../../../loaders/email_loader";
import { mysqlconnection } from "../../../../loaders/mysql_loader";
import handlebars from "handlebars";
import dotenv from "dotenv";

dotenv.config();

const sendResponse = (res, code, data, message, cacheData) => {
  res.status(code).send({
    data: data,
    message: message,
    cacheData,
  });
};
export default async (req, res, next) => {
  /**
     * @swagger
     * /v1/mails/send:
     *   post:
     *     tags:
     *       - name: mails     
     *     summary: Sender of email templates of the web.
     *     description: Endpoint that send an email template from smtp of web to the list of mails that are sent as params, filled with data that we receive as params too.
     *     parameters:
     *       - in: body
     *         name: template
     *         description: Template that the mail use in the content.
     *         schema:
     *           type: string
     *         example: testtemplate
     *         required: false
     *     responses:
     *       200:
     *         description: Mail was sent, with code OK.
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
     *                     info:
     *                         type: string
     *                         description: Sender info
     *        
     *       500:
     *         description: Mail wasn't sent, with code KO.
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
     *                         description: Sender error info

    */
  const templateRef = req.body.template;
  const listAdresses = req.body.targets;
  const subject = req.body.subject;

  mysqlconnection.query(
    `SELECT template FROM _atlas_.atlas_mail_templates WHERE reference = '${templateRef}';`,
    function (err, response, fields) {
      console.log(
        `SELECT template FROM _atlas_.atlas_mail_templates WHERE reference = '${templateRef}';`
      );
      const template = handlebars.compile(response[0].template);
      const replacements = {
        test: "NOMBRE DE PRUEBAS",
      };
      const htmlToSend = template(replacements);

      const message = {
        from: `${process.env.COMPANY_NAME}<${process.env.MAIL_SENDER}>`, // Sender address
        to: listAdresses, // List of recipients
        subject: subject, // Subject line
        html: htmlToSend,
      };
      transport.sendMail(message, function (err, info) {
        if (err) {
        } else {
          sendResponse(res, 200, {}, "Mail was sent, with code OK.", {
            responseCached: false,
          });
        }
      });
    }
  );
};
