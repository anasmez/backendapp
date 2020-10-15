const {Sequelize} = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, {
    host: config.database.host,
    dialect: config.database.dialect,
    port: config.database.port,
});

module.exports = sequelize;