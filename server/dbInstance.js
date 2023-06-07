const Sequelize = require('sequelize');

const database = new Sequelize('portfolio', 'USERNAME', 'PASSWORD', {
    host: 'aws.connect.psdb.cloud',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,        
        }
    }
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