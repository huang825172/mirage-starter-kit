const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(process.env.MIRAGE_MYSQL_CONNECT, {});

module.exports = sequelize;