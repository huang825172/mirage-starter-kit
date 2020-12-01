const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.MIRAGE_DB_CONNECT, {});

module.exports = sequelize;