import React from 'react';
import IRoute from '@/interfaces/route';

// templates
const MainTemplate = React.lazy(() => import('@/components/templates/Main'));

const routes: IRoute[] = [
  {
    path: '/',
    name: 'HomePage',
    exact: true,
    component: React.lazy(() => import('@/pages')),
    template: MainTemplate,
  },
  {
    path: '/search/:keyword',
    name: 'SearchPage',
    exact: true,
    component: React.lazy(() => import('@/pages/search')),
    template: MainTemplate,
  },
  {
    path: '/movie/:slug',
    name: 'HomePage',
    exact: true,
    component: React.lazy(() => import('@/pages/detail')),
    template: MainTemplate,
  },
];

export default routes;
