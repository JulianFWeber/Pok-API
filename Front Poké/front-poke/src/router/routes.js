const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: 'image',
        component: () => import('pages/imagePage.vue'),
      },
      {
        path: "register",
        component: () => import("pages/RegisterPage.vue"),
      },

      {
        path: "pokedex",
        component: () => import("pages/PokedexPage.vue"),
      },  
      {
        path: "dex",
        component: () => import("pages/DexPage.vue"),
      },
    ],
  },
  // Fallback para páginas não encontradas
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;