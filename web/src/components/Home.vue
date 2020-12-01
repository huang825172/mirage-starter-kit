<template>
  <div>
    <div>
      <b-navbar
          type="light"
          variant="light"
          id="nav">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/api">API</b-nav-item>
          <b-nav-item href="/NoPage">404</b-nav-item>
          <b-nav-item href="/about">关于</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <b-img
        center
        :src="logoImg"
        alt="Logo image"
        id="logo"
    ></b-img>
  </div>
</template>

<script>
import common from "../common";

export default {
  name: "Home",
  data() {
    return {
      logoImg: common.kLogoDark,
    }
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
}
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