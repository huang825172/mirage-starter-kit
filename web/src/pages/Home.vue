<template>
  <div>
    <Navbar></Navbar>
    <b-img center :src="logoImg" alt="Logo image" id="logo"></b-img>
  </div>
</template>

<script>
import common from "../common";
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  data() {
    return {
      logoImg: common.kLogoDark,
    };
  },
  components: {
    Navbar,
  },
  // 异步请求示例代码
  // mounted() {
  //   this.axios.post(common.apiBase + common.apiService.login, {
  //     'token': 'login',
  //     'data': {
  //       'phone': this.form.phone,
  //       'password': this.form.password,
  //     }
  //   }).then((res) => {
  //     localStorage.setItem('loginToken', res.data.data.token);
  //     localStorage.setItem('loginName', res.data.data.name);
  //     this.$router.push('/personal');
  //   }).catch((err) => {
  //     this.fail = true;
  //     console.log(err);
  //   });
  // }
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
</style>