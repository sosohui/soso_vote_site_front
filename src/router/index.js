import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import VoteList from "../views/VoteList.vue";
import MakeVoteInfo from "../views/make/makeVoteInfo.vue";
import VoteResult from "../views/VoteResult.vue";
import MakeVoteAnswer from "../views/make/makeVoteAnswer.vue";
import VoteInfo from "../views/VoteInfo.vue";

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
  },
  {
    path: "/voteInfo",
    name: "voteInfo",
    component: VoteInfo
  },
  {
    path: "/voteResult",
    name: "voteResult",
    component: VoteResult
  },
  {
    path: "/makeVoteAnswer",
    name: "makeVoteAnswer",
    component: MakeVoteAnswer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
