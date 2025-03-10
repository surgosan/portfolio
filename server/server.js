const { portfolioDB, ksuAUVDB } = require('./dbInstance');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors())
require('./routes')(app);
const port = 8081;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});

async function startServer() {
    try {
        await Promise.all([
            portfolioDB.authenticate(),
            ksuAUVDB.authenticate()
        ]);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to databases:', error);
    }
}

startServer().then(() => {
    console.log('Connection to databases has been established successfully.');
});