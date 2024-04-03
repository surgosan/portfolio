const batteryData = require('../ksu_auv_models');
const httpErrors = require('../../controllers/httpsErrors');

module.exports = {
    async inputData (req, res) {
        try {
            const inputData = req.body
            const createdData = await batteryData.bulkCreate(inputData, { updateOnDuplicate: ['datetime'] });
            res.send(`${createdData.length} battery data points submitted. ${inputData - createdData} duplicates avoided.`);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    }
}