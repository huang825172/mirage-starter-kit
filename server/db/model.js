const sequelize = require('./db')
const { Model, DataTypes } = require('sequelize');

// 参考：https://sequelize.org/master/manual/model-basics.html

// 设计数据表
class Click extends Model { };
Click.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {
    sequelize,
    tableName: 'clicks',
});
