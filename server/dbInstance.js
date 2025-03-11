require('dotenv').config();
const Sequelize = require('sequelize');

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

async function initPiDB()
{
    try {
        await piDB.authenticate();
        console.log('PI DB has connected.');
    } catch (error) {
        console.error('Unable to connect to PI DB:', error);
    }
}

async function init() {
    await Promise.all([
        initPiDB(),
    ]);
}

init().then(() => {
    console.log("DB and Schemas Connected")
});

module.exports = {
    piDB
};
