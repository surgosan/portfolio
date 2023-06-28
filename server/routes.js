const messageController = require('./controllers/messageController');
const suggestionController = require('./controllers/suggestionController');
const critismController = require('./controllers/critismController');
const visitorController = require('./controllers/visitorCountController');

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
}