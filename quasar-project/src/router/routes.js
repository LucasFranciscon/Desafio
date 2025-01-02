const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'favoritos', component: () => import('pages/FavoritosPage.vue') },
      { path: 'categorias', component: () => import('pages/CategoriasPage.vue') },
      { path: 'sobre', component: () => import('pages/SobrePage.vue') }
    ]
  }
]

export default routes