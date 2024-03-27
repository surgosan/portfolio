const Sequelize = require('sequelize');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const database = new Sequelize('portfolio', username, password, {
    host: 'surgo-amazon-db.cjms264s0hpn.us-east-2.rds.amazonaws.com',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
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