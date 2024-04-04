const { DataTypes } = require('sequelize');
const { portfolioDB } = require('../dbInstance');

const VisitorCount = portfolioDB.define('VisitorCount',
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
