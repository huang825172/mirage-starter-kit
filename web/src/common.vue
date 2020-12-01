<script>
// 导出图片资源地址
const kLogoClear = require("./assets/logo_clear.png");
const kLogoDark = require("./assets/logo_dark.png");

// 导出API地址
const kApiService = {
  root: "/api",
  addCount: "/api/add",
  getCount: "/api/get",
};

export default {
  name: "common",
  kLogoClear,
  kLogoDark,
  kApiService,
};
</script>