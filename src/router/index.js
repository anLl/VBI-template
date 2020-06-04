import Vue from "vue";
import VueRouter from "vue-router";
import modulesrRoutes from "./modules";
Vue.use(VueRouter);

const defaultRoutes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import(/*webpackChunkName:'Home'*/"@/views/Home/index"),
  },
];

const errorRoutes = [
  {
    path: "/403",
    component: () => import(/*webpackChunkName:'403Page'*/"@/views/Error/403"),
  },
  {
    path: "*",
    component: () => import(/*webpackChunkName:'404Page'*/"@/views/Error/404"),
  },
];
let routes = [
    ...defaultRoutes, ...modulesrRoutes, ...errorRoutes
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
