import { redirecIfAuthenticated, needVerifyEmailToken } from './guards';

export default [
  {
    path: '/login',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    beforeEnter: redirecIfAuthenticated,
    children: [
      {
        name: 'login',
        path: '',
        component: () => import('@/views/auth/Login.vue'),
      },
    ],
  },
  {
    path: '/cadastrar',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
      {
        name: 'register',
        path: '',
        component: () => import('@/views/auth/Register.vue'),
      },
    ],
  },
  {
    path: '/verificar-email',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    beforeEnter: needVerifyEmailToken,
    children: [
      {
        name: 'verifyEmail',
        path: '',
        component: () => import('@/views/auth/VerifyEmail.vue'),
      },
    ],
  },
  {
    path: '/esqueci-senha',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    children: [
      {
        name: 'forgotPassword',
        path: '',
        component: () => import('@/views/auth/ForgotPassword.vue'),
      },
    ],
  },
];