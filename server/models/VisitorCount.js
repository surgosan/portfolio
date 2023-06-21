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
        lastVisit: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, 
        
    {
        timestamps: false,
        modelName: 'VisitorCounts',
    }
);

module.exports = VisitorCount;
