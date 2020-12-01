<template>
  <div>
    <Navbar></Navbar>
    <b-img center :src="this.logoImg" alt="Logo image" id="logo"></b-img>
    <div class="container">
      <div class="row">
        <div class="col-1 col-sm-2 col-md-4"></div>
        <div class="col-10 col-sm-8 col-md-4">
          <b-button @click="click()" variant="danger" style="width: 100%">
            已按下 {{ count }} 次
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../common";
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  data() {
    return {
      count: 0,
      logoImg: common.kLogoDark,
    };
  },
  components: {
    Navbar,
  },
  // 在页面载入时更新点击次数数据
  mounted() {
    this.axios
      .post(common.kApiService.getCount, {})
      .then((res) => {
        this.count = res.data.count;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    // 点击时，先报告点击事件，再请求新的点击次数
    click() {
      this.axios
        .post(common.kApiService.addCount, {})
        .then(() => {
          this.axios
            .post(common.kApiService.getCount, {})
            .then((res) => {
              this.count = res.data.count;
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>

#logo {
  margin-top: 2vh;
  max-height: 300px;
}

</style>