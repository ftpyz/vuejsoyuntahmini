import VueRouter from "vue-router";
import App from "@/App";
import Deneme from "@/components/Deneme";
import OyunAnaEkran from "@/components/OyunAnaEkran";
const routes = [
  {
    path: "/anaekran",
    name: "AnaEkran",
    component: App,
    children: [
      {
        path: "deneme",
        name: "AnaEkranDeneme",
        component: Deneme
      },
      {
        path: "sayi/:id",
        name: "AnaEkranDeneme",
        component: Deneme
      }
    ]
  },
  {
    path: "/Oyun",
    name: "AnaEkranOyun",
    component: OyunAnaEkran
  }
];
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "hash"
});

export default router;
