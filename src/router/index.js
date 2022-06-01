import Vue from "vue";
import VueRouter from "vue-router";
import StakingInviter from "../views/staking/StakingInviter.vue";
import StakingInviterHistory from "../views/staking/StakingInviterHistory.vue";
import StakingSingleForHecoRecord1 from "../views/staking-single/StakingSingleForHecoRecord1.vue";
import StakingSingleForHecoRecordHistory1 from "../views/staking-single/StakingSingleForHecoRecordHistory1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/home/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        redirect: "/staking",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "/staking",
        name: "Staking",
        redirect: "/staking/inviter",
        component: () => import("@/layouts/home/ViewBlank.vue"),
        children: [
          {
            path: "/staking/inviter",
            name: "StakingInviter",
            redirect: "/staking/inviter/1",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/inviter/1",
                name: "StakingInviter1",
                component: StakingInviter
              },
              {
                path: "/staking/inviter/1/history",
                name: "StakingInviter1History",
                component: StakingInviterHistory
              }
            ]
          },
          {
            path: "/staking/single",
            name: "StakingSingle",
            redirect: "/staking/single/1",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/single/1",
                name: "StakingSingleForHecoRecord1",
                component: StakingSingleForHecoRecord1
              },
              {
                path: "/staking/single/1/history",
                name: "StakingSingleForHecoRecordHistory1",
                component: StakingSingleForHecoRecordHistory1
              }
            ]
          }
        ]
      },
      {
        path: "/404",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "*",
        redirect: "/"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
});

export default router;
