const messageController = require('./controllers/messageController');
const suggestionController = require('./controllers/suggestionController');
const critismController = require('./controllers/critismController');
const visitorController = require('./controllers/visitorCountController');

const {batteryController, motorController, servoController, logController, powerController} = require("./ksu_auv_control/ksu_auv_controllers");

module.exports = (app) => {
	app.post('/message/new', messageController.newMessage);
	app.post('/message/getByName', messageController.getByName);
	app.get('/message/getAll', messageController.getAllMessages);

	app.post('/critism/new', critismController.newCrit);
	app.get('/critism/getAll', critismController.getAllMessages);

	app.post('/suggestion/new', suggestionController.newSuggestion);
	app.post('/suggestion/getByName', suggestionController.getSuggestionByFirstName);
	app.get('/suggestion/getAll', suggestionController.getAllSuggestions);
	app.put('/suggestion/fulfillById', suggestionController.fulfillSuggestionByID);
	app.delete('/suggestion/deleteById/:id', suggestionController.deleteSuggestionByID);

	app.post('/visit/new', visitorController.newVisit);
	app.get('/visit/getAll', visitorController.getAllVisits);
	app.get('/visit/getRecent', visitorController.getRecentVisits);
	app.delete('/visit/deleteRecent', visitorController.deleteMostRecentVisit);


// 	KSU AUV
	// Batteries
	app.post('/auv/battery/new', batteryController.inputData);
	app.post('/auv/battery/bulk', batteryController.inputBulk);
	app.post('/auv/battery/getBetweenSessions', batteryController.getAllBetween);

	// Motors
	app.post('/auv/motor/new', motorController.inputData);
	app.post('/auv/motor/bulk', motorController.inputBulk);
	app.post('/auv/motor/getBetweenSessions', motorController.getAllBetween);

	// Servos
	app.post('/auv//servo/new', servoController.inputData);
	app.post('/auv//servo/bulk', servoController.inputBulk);
	app.post('/auv/servo/getBetweenSessions', servoController.getAllBetween);

	// Logs
	app.get('/auv/log/checkSession', logController.checkActiveSession)
	app.post('/auv/log/new', logController.inputData);
	app.post('/auv/log/bulk', logController.inputBulk);
	app.post('/auv/log/getSessions', logController.getSessionMarkers);
	app.post('/auv/log/getBetweenSessions', logController.getAllBetween);

	// Power
	app.get('/auv/power/fetch', powerController.fetchPower);
	app.post('/auv/power/toggle', powerController.togglePower);
	app.post('/auc/power/new', powerController.newPower);
}