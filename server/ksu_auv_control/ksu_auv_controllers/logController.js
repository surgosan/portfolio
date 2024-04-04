const {log, batteryData} = require('../ksu_auv_models');
const httpErrors = require('../../controllers/httpsErrors');

module.exports = {
    async inputBulk (req, res) {
        try {
            const inputData = req.body
            const createdData = await log.bulkCreate(inputData, { ignoreDuplicates: true });
            res.send(`${createdData.length} logs submitted. ${inputData.length - createdData.length} duplicates avoided.`);
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
            const createdData = await log.create(req.body);
            res.send(`Successfully input log with ID: ${createdData.id}`);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    }
}