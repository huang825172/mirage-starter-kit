const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 参考：https://expressjs.com/en/starter/hello-world.html

// 引入 Api 路由和 History 模式支持路由
const apiRouter = require('./routes/apis');
const historyRouter = require('./routes/history');

// 引入并初始化数据库
const sequelize = require('./db/db')
require('./db/model');
await sequelize.sync({ force: true });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/', historyRouter);

module.exports = app;
