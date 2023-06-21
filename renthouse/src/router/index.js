import { createRouter, createWebHistory } from "vue-router";

//引入所有页面

import Login from "../views/LoginView.vue"; //登录
import Register from "../views/RegisterView.vue"; //注册
import Home from "../views/HomeView.vue"; //首页

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },

  { path: "/", name: "Register", component: Register },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  //{
  //  path: "/Register",
  // name: "Register",
  // component: Register,
  // meta: {
  //   title: "注册",
  //  },
  //},

  // {
  //   path: "/HomePage",
  //   name: "HomePage",
  //  component: HomePage,
  //   meta: {
  //    title: "主页",
  //  },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
