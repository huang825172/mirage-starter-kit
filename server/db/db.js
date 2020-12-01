const { Sequelize } = require('sequelize');

// 参考：https://sequelize.org/master/manual/getting-started.html

// 根据环境变量设置初始化数据库连接
const sequelize = new Sequelize(process.env.MIRAGE_DB_CONNECT, {});

module.exports = sequelize;