require('dotenv').config();
const Sequelize = require('sequelize');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const local_u = process.env.LOCAL_USERNAME
const local_p = process.env.LOCAL_PASSWORD

const piDB = new Sequelize('portfolio', local_u, local_p, {
    host: 'localhost',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});

const portfolioDB = new Sequelize('portfolio', username, password, {
    host: 'surgo-amazon-db.cjms264s0hpn.us-east-2.rds.amazonaws.com',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});

async function initPiDB()
{
    try {
        await piDB.authenticate();
        console.log('PI DB has connected.');
    } catch (error) {
        console.error('Unable to connect to PI DB:', error);
    }
}

async function initPortfolio()
{
    try {
        await portfolioDB.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function init() {
    await Promise.all([
        initPiDB(),
        // initPortfolio()
    ]);
}

init().then(() => {
    console.log("DB and Schemas Connected")
});

module.exports = {
    // portfolioDB,
    piDB
};
