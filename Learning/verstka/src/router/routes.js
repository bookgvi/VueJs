const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home'),
    children: [
      { path: '', component: () => import('../components/Classic') },
      { path: 'hello', name: 'hello', component: () => import('../views/Hello') },
      { path: 'blockclassic', name: 'blockclassic', component: () => import('../components/Classic') }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
export default routes
