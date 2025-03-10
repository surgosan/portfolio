require('dotenv').config();
const Sequelize = require('sequelize');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const portfolioDB = new Sequelize('portfolio', username, password, {
    host: 'surgo-amazon-db.cjms264s0hpn.us-east-2.rds.amazonaws.com',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});

const ksuAUVDB = new Sequelize('ksu_auv_control', username, password, {
    host: 'surgo-amazon-db.cjms264s0hpn.us-east-2.rds.amazonaws.com',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
})

async function initPortfolio()
{
    try {
        await portfolioDB.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function initAUV() {
    try {
        await ksuAUVDB.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function init() {
    await Promise.all([initPortfolio(), initAUV()]);
}

init().then(() => {
    console.log("DB and Schemas Connected")
});

module.exports = {
    portfolioDB,
    ksuAUVDB
};
