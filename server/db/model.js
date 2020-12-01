const sequelize = require('./db')
const { Model, DataTypes } = require('sequelize');

class Todo extends Model { };
Todo.init({
    thing: { type: DataTypes.TEXT },
    id: { type: DataTypes.INTEGER, primaryKey: true }
}, {
    sequelize,
    tableName: 'todo',
});
