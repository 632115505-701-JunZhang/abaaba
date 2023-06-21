<template>
  <div class="Registerform">
    <!-- 注册title-->
    <h2>
      <span>Register new account</span>
    </h2>

    <!--账号-->
    <div class="Registerform-item username">
      <input
        type="text"
        v-model="username"
        placeholder="Input your Username"
        maxLength="14"
      />
      <span class="clear" onclick="clearName()">x</span>
    </div>

    <!--邮箱-->
    <div class="Registerform-item email">
      <input type="email" v-mode="email" placeholder="Input your Email" />
    </div>

    <!--密码-->
    <div class="Registerform-item pwd">
      <input
        type="password"
        v-model="password"
        placeholder="Input your password"
        maxLength="14"
      />
      <span class="clear" onclick="clearPassword()">x</span>
    </div>

    <!--确认密码-->
    <div class="Registerform-item pwd">
      <input
        type="password"
        v-model="password"
        placeholder="Input your password"
        maxLength="14"
      />
      <span class="clear" onclick="clearPassword()">x</span>
    </div>

    <!--注册-->
    <div class="Registerform-item register">
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<style>
.Registerform {
  width: 500px;
  height: 540px;
  background: #fff;
  margin: auto;
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

.Registerform-item {
  width: 400px;
  height: 42px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 15px;
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

.Registerform-item button {
  width: 101%;
  height: 101%;
  font-size: 18px;
  border: 0;
  outline: none;
  background-color: #3b97b7;
  color: #fff;
  border-radius: 5px;
}

.Registerform-item.register {
  margin-top: 10px;
  border-radius: 5px;
}

.register a {
  color: #3b97b7;
  padding-left: 10px;
}
</style>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    register() {
      alert("Pleast confirm your email address!");
      this.$router.push({ name: "Login" });
    },
  },

  //Login  Api 接口

  // life cycle create

  created() {},
  beforeCreate() {},
  beforeUnmount() {},
};
</script>
