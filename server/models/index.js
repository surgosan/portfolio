const Sequelize = require('sequelize');

const Message = require('./Message');
const Suggestion = require('./Suggestion');
const Critism = require('./Critism');
const VisitorCount = require('./VisitorCount');

const data = {
    Message,
    Suggestion,
    Critism,
    VisitorCount
}

data.sequelize = Sequelize;

module.exports = data;