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
        <div v-if="false">
          <nuxt-link>登录 / 注册</nuxt-link>
        </div>
        <div class="img">
          <nuxt-link to="/">
            <img src="../assets/pikaqiu.jpg" alt />
          </nuxt-link>
          <el-dropdown>
            <span class="el-dropdown-link">
              奔放的查克拉
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
              
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
