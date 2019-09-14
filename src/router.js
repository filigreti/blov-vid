import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/emoji",
      name: "emoji",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Emoji.vue")
    },
    {
      path: "/text-one",
      name: "textone",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/TextOne.vue")
    },
    {
      path: "/article-image",
      name: "articleimage",
      meta: { checkText: false },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ArticleImage.vue")
    },
    {
      path: "/comment",
      name: "comment",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Comment.vue")
    },
    {
      path: "/name",
      name: "name",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Name.vue")
    },
    {
      path: "/review",
      name: "review",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Review.vue")
    },
    {
      path: "/final",
      name: "final",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Final.vue")
    }
  ]
});

export default router;
