import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Home from "../views/Home.vue";
import AI from "../views/AI.vue";
import Chat from "../views/Chat.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/ai",
    name: "AI",
    component: () => import(/* webpackChunkName: "about" */ "../views/AI.vue")
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "about" */ "../views/Chat.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
