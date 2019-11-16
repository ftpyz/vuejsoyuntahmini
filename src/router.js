import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
const routes = [
  {
    path: "/anaekran",
    name: "AnaEkran",
    component: HelloWorld
  }
];
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "hash"
});

export default router;
