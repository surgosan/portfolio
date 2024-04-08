const {power} = require('../ksu_auv_models')
const httpErrors = require('../../controllers/httpsErrors');

module.exports = {
    async fetchPower(req, res) {
        try {
            res.send(await power.findOne())
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    },

    async togglePower(req, res) {
        try {
            const currentPower = await power.findOne();
            currentPower.status = !currentPower.status;

            await currentPower.save();
            res.send(await power.findOne());
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    }
}