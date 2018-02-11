import Vue from 'vue';
import Router from 'vue-router';
import MaterialIcons from '@/pages/MaterialIcons';
import Dashboard from '@/pages/Dashboard';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // console.log('scrollBehavior');
    if (to.hash) {
      // console.log(to.hash);
      return {
        selector: to.hash,
        offset: { y: 80 },
      };
    }

    return { y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/icons/meterial',
      name: 'Material Icons',
      component: MaterialIcons,
    },
  ],
});
