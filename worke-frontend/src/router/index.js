import Vue from "vue";
import VueRouter from "vue-router";
import LandingMobile from "../views/LandingMobile.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingMobile,
  },
  {
    path: "/Login",
    name: "loginCard",
    component: Login,
    meta: {
      header: 0,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
