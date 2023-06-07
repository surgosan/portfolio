const { Critism } = require('../models');
const httpErrors = require('./httpsErrors');

module.exports = {
    async newCrit (req, res)
    {
        try
        {
            const critMessage = await Critism.create(req.body);
            res.send("Thanks " + critMessage.first_name  + ". I value your feedback.") 
        }
        catch (error)
        {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    },

    async getByName(req, res) {
        try {
          const { first_name } = req.body;
          const messages = await Critism.findAll({ where: { first_name } });
    
          if (messages.length === 0) {
            const errorResponse = httpErrors.notFound(`No messages from ${first_name} found.`);
            res.status(errorResponse.status).send({
              error: errorResponse.message,
            });
          } 
          else 
          {
            res.send(messages);
          }
        } 
        catch (error) 
        {
          const errorMessage = error.message || 'An error occurred';
          const errorResponse = httpErrors.internalServerError(errorMessage);
          res.status(errorResponse.status).send({
            error: errorResponse.message,
          });
        }
    },

    async getAllMessages(req, res) {
        try {
          const messages = await Critism.findAll();
    
          if (messages.length === 0) {
            const errorResponse = httpErrors.notFound('No messages found.');

            res.status(errorResponse.status).send({
              error: errorResponse.message,
            });
          } 
          else 
          {
            res.send(messages);
          }
        } 
        catch (error) 
        {
          const errorMessage = error.message || 'An error occurred';
          const errorResponse = httpErrors.internalServerError(errorMessage);

          res.status(errorResponse.status).send({
            error: errorResponse.message,
          });
        }
    }
}