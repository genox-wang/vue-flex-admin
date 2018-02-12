import Vue from 'vue';
import Router from 'vue-router';
import MaterialIcons from '@/pages/MaterialIcons';
import Dashboard from '@/pages/Dashboard';
import QA from '@/pages/Q&A';
import FAlertExamples from '@/pages/FAlertExamples';

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
    {
      path: '/examples/alerts',
      name: 'FAlert Examples',
      component: FAlertExamples,
    },
    {
      path: '/markdowns/qa',
      name: 'Q&A',
      component: QA,
    },
  ],
});
