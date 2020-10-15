const {Model, DataTypes} = require('sequelize');
const sequelize=require('../db');

class Role extends Model {}

Role.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    sequelize, modelName: "role"
});

module.exports=Role;