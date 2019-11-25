import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import VoteList from "../views/VoteList.vue";
import MakeVoteInfo from "../views/make/makeVoteInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/voteList",
    name: "voteList",
    component: VoteList
  },
  {
    path: "/makeVoteInfo",
    name: "makeVoteInfo",
    component: MakeVoteInfo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
