const express = require('express');
const path = require('path');
const router = express.Router();

// 参考：https://router.vuejs.org/zh/guide/essentials/history-mode.html

// 如果没有任何路由匹配，则固定返回首页，以支持 Vue.js 的 History 模式
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;
