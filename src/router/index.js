import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Index.vue";
import About from "../views/about/Index.vue";
import Projects from "../views/projects/Index.vue";
import Contact from "../views/contact/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
