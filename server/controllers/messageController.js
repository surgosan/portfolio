const Message = require('../models/Message');
const httpErrors = require('./httpsErrors');

module.exports = {
    async newMessage (req, res)
    {
        try
        {
            const newMessage = await Message.create(req.body);
            res.send("Thanks " + newMessage.first_name  + ". Your message was sent.") 
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
          const messages = await Message.findAll({ where: { first_name } });
    
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
          const messages = await Message.findAll();
    
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