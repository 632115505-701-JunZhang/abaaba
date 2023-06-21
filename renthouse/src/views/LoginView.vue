<template>
  <div class="form">
    <!-- 登录title-->
    <h2>
      <span>HRM</span>
    </h2>
    <!--头像-->
    <div class="logo">
      <img src="../assets/Img/logo.png" alt="" />
      <div></div>
    </div>

    <!--账号-->
    <div class="form-item name">
      <input
        type="text"
        v-model="email"
        placeholder="Input your Email"
        maxLength="14"
      />
      <span class="clear" onclick="clearName()">x</span>
    </div>

    <!--密码-->
    <div class="form-item pwd">
      <input
        type="password"
        v-model="password"
        placeholder="Input your password"
        maxLength="14"
      />
      <span class="clear" onclick="clearPassword()">x</span>
    </div>

    <!--登录按钮-->
    <div class="form-item login">
      <button @click="login">Login</button>
    </div>

    <!--注册-->
    <div class="form-item register">
      <button @click="register">Register</button>
    </div>

    <!--忘记密码-->
    <div class="forget">
      <a href="#">Forget password?</a>
    </div>
  </div>
</template>

<style>
.form {
  width: 500px;
  height: 540px;
  background: #fff;
  margin: 0 auto;
  margin-top: 80px;
}

h2 {
  padding-top: 32px;
  font-size: 30px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 22px;
  margin-bottom: 60px;
  color: #656262;
}

h2 span {
  background-color: #fff;
  padding: 0 20px;
  font-size: 700;
}

.form-item {
  width: 400px;
  height: 42px;
  position: relative;
  margin: 0 auto;
}

input {
  width: 400px;
  height: 40px;
  border: 0;
  outline: none;
  text-indent: 16px;
  font-size: 17px;
  color: #606266;
  border-radius: 5px;
  border: 1px solid #9e9e9e;
}

input::placeholder {
  font-size: 15px;
  color: #ccc;
}

.clear {
  position: absolute;
  right: 15px;
  top: 9px;
  color: #ccc;
  cursor: pointer;
}
.name input {
  border-bottom: none;
  border-radius: 5px 5px 0 0;
}

.pwd input {
  border-radius: 0 0 5px 5px;
}

.form-item.login {
  margin-top: 30px;
  border-radius: 5px;
}
.form-item.register {
  margin-top: 10px;
  border-radius: 5px;
}

.form-item button {
  width: 101%;
  height: 101%;
  font-size: 18px;
  border: 0;
  outline: none;
  background-color: #3b97b7;
  color: #fff;
  border-radius: 5px;
}

.register a {
  color: #3b97b7;
  padding-left: 10px;
}

.forget {
  margin-top: 15px;
  padding-right: auto;
  font-size: 15px;
}

.forget a {
  color: #9e9e9e;
}
</style>

<script>
export default {
  //函数式写法传参

  data() {
    return {};
  },

  methods: {
    //点击跳转注册页面
    register() {
      this.$router.push({ name: "Register" });
    },

    //Login 登录按钮
    login() {
      this.$router.push({ name: "Home" });
    },
  },

  // life cycle create

  created() {},
  beforeCreate() {},
  beforeUnmount() {},
};
</script>
