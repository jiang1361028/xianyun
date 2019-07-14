<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="mian">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="../assets/logo.png" alt />
        </nuxt-link>
      </div>
      <!-- 菜单 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登录 -->
      <div class="denglu">
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
        <div class="img" v-else>
          <!-- 用户头像 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <!-- 头像 -->
              <img
                :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                alt
              />
              <!-- 昵称 -->
              {{ $store.state.user.userInfo.user.nickname }}
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleLogout(){
      this.$store.commit('user/clearUserInfo')
      this.$message.success('退出成功')
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  box-shadow: 0 0 3px 0 green;

  .mian {
    width: 1000px;
    margin: 0 auto;
    line-height: 60px;
  }
  .logo {
    margin-right: 30px;
  }
  .navs {
    flex: 1;
    a {
      display: block;
      height: 60px;
      padding: 0 20px;

      &:hover {
        background-color: skyblue;
        color: #fff;
      }
    }
  }
  .denglu {
    .img {
      img {
        width: 36px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
}
</style>
