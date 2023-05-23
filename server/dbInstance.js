const Sequelize = require('sequelize');

const database = new Sequelize('BeSpokedbikes', 'surgosan', 'Rosselin06!', {
    host: 'localhost',
    dialect:'mysql'
  });

async function init()
{
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

init(); //test if we have a connection

module.exports = database;