const express = require('express');
const router = express.Router();

const { addCounter, getCounter } = require('../controllers/counter');

// 参考：https://expressjs.com/zh-cn/guide/routing.html

// 对不同Api请求进行分流
router
  .post('/add', async (req, res) => {
    await addCounter(req, res);
  })
  .post('/get', async (req, res) => {
    await getCounter(req, res);
  });

module.exports = router;
