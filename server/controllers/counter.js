const sequelize = require('../db/db');

// 参考：https://sequelize.org/master/manual/model-querying-basics.html

// 向数据库添加一次点击记录
async function addCounter(req, res) {
    try {
        await sequelize.authenticate();
        await sequelize.models.Click.create();
        res.send(JSON.stringify({
            status: 'OK'
        }));
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }));
    }
}

// 统计数据库中的记录数量
async function getCounter(req, res) {
    try {
        await sequelize.authenticate();
        const count = (await sequelize.models.Click.findAll()).length;
        res.send(JSON.stringify({
            status: "OK",
            count: count
        }));
    } catch (err) {
        console.log(err);
        res.send(JSON.stringify({
            status: 'FAIL',
            err: err
        }));
    }
}

module.exports = { addCounter, getCounter };