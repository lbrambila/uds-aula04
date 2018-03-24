import Vue from 'vue';
import Router from 'vue-router';
import LarissaBrambilaEstevo from '@/components/LarissaBrambilaEstevo';
import contador from '@/components/contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sobre',
      name: 'Sobre',
      component: LarissaBrambilaEstevo,
    },
    {
      path: '/contador',
      component: contador,
    },
  ],
});
