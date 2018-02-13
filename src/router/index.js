import Vue from 'vue';
import Router from 'vue-router';
import _ from 'lodash';

const items = require('../configs/nav.json');

Vue.use(Router);


// Route helper function for lazy loading
function route(path, name, view) {
  return {
    path,
    name,
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `../pages/${view}.vue`,
    ),
  };
}

const routes = [];

if (_.isArray(items)) {
  _.forEach(items, (item) => {
    if (_.isArray(item.items)) {
      _.forEach(item.items, (nav) => {
        routes.push(route(nav.path, nav.name, nav.component));
      });
    }
  });
}


const router = new Router({
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash,
        offset: { y: 80 },
      };
    }

    return { y: 0 };
  },
  routes,
});


export default router;
