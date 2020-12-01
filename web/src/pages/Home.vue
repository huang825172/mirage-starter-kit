<template>
  <div>
    <Navbar></Navbar>
    <b-img center :src="this.logoImg" alt="Logo image" id="logo"></b-img>
    <div class="container">
      <div class="row">
        <div class="col-5"></div>
        <div class="col-2">
          <b-button @click="click()" variant="danger" style="width: 100%">
            按下
          </b-button>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4" id="counter">
          <h3>已按下 {{ count }} 次</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kLogoDark, kApiService } from "../common";
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  data() {
    return {
      count: 0,
      logoImg: kLogoDark,
    };
  },
  components: {
    Navbar,
  },
  // 在页面载入时更新点击次数数据
  mounted() {
    this.axios
      .post(kApiService.getCount, {})
      .then((res) => {
        this.count = res.data.count;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    // 点击时，先报告点击事件，再请求新的点击次数
    click() {
      this.axios
        .post(kApiService.addCount, {})
        .then(() => {
          this.axios
            .post(kApiService.getCount, {})
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
#nav {
  border-bottom: solid lightgray 1px;
}

#logo {
  margin-top: 2vh;
  max-height: 300px;
}

#counter {
  margin-top: 20px;
  text-align: center;
}
</style>