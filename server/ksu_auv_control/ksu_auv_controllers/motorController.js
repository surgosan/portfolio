const {motorData, batteryData} = require('../ksu_auv_models');
const httpErrors = require('../../controllers/httpsErrors');

module.exports = {
    async inputBulk (req, res) {
        try {
            const inputData = req.body
            const createdData = await motorData.bulkCreate(inputData, { ignoreDuplicates: true });
            res.send(`${createdData.length} motor data points submitted. ${inputData.length - createdData.length} duplicates avoided.`);;
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    },

    async inputData(req, res) {
        try {
            const createdData = await motorData.create(req.body);
            res.send(`Successfully input motor with ID: ${createdData.id}`);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    }
}