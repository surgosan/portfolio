const { DataTypes } = require('sequelize');
const database = require('../dbInstance');

const VisitorCount = database.define('VisitorCount', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        visits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        lastVisit: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, 
        
    {
        timestamps: false,
        modelName: 'VisitorCount',
    }
);

module.exports = VisitorCount;
