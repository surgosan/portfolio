const { Suggestion } = require('../models');
const httpErrors = require('./httpsErrors');

module.exports = {
  async newSuggestion(req, res) {
    try {
      const newSuggestion = await Suggestion.create(req.body);
      res.send("Thanks " + newSuggestion.first_name + ". View your suggestion in the suggestions page.");
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },

  async getSuggestionByFirstName(req, res) {
    try {
      const { first_name } = req.body;
      const suggestions = await Suggestion.findAll({ where: { first_name } });

      if (suggestions.length === 0) {
        const errorResponse = httpErrors.notFound(`No suggestions from ${first_name} found.`);
        res.status(errorResponse.status).send({
          error: errorResponse.message,
        });
      } else {
        res.send(suggestions);
      }
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },

  async getAllSuggestions(req, res) {
    try {
      const suggestions = await Suggestion.findAll();

      if (suggestions.length === 0) {
        const errorResponse = httpErrors.notFound('No suggestions yet.');

        res.status(errorResponse.status).send({
          error: errorResponse.message,
        });
      } else {
        res.send(suggestions);
      }
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },

  async deleteSuggestionByID(req, res) {
    try {
      const { id } = req.params;
      const deletedSuggestion = await Suggestion.destroy({ where: { id } });

      if (deletedSuggestion === 0) {
        const errorResponse = httpErrors.notFound(`Suggestion with ID ${id} not found.`);
        res.status(errorResponse.status).send({
          error: errorResponse.message,
        });
      } else {
        res.send(`Suggestion with ID ${id} has been deleted.`);
      }
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },

  async fulfillSuggestionByID(req, res) {
    try {
      const { id } = req.body;
      const [updatedRowsCount] = await Suggestion.update(
        { fulfilled: true },
        { where: { id } }
      );

      if (updatedRowsCount === 0) {
        const errorResponse = httpErrors.notFound(`Suggestion with ID ${id} not found.`);
        res.status(errorResponse.status).send({
          error: errorResponse.message,
        });
      } else {
        res.send(`Suggestion with ID ${id} has been fulfilled.`);
      }
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },
};
