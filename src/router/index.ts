import { createRouter, createWebHistory } from "vue-router";

import Index from "/@pages/Index.vue"

// import Index from "/@components/a.vue"
// import Index from "/Users/haopeiwei/Documents/hpw/trade/src/components/a.vue"
// import Index from "../pages/Index.vue"

// import connect from "/@components/connect/connect.vue";
// import attachment from "/@components/attachment/attachment.vue";
// import puzzleImg from "/@components/puzzleImg/puzzleImg.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  }
];
const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;
