import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/jobs',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('@/views/JobsView.vue'),
    },
    {
      path: '/jobs/:id',
      name: 'job-detail',
      component: () => import('@/views/JobDetailView.vue'),
    },
    {
      path: '/recruiter/workspace',
      name: 'recruiter-workspace',
      component: () => import('@/views/RecruiterWorkspaceView.vue'),
    },
    {
      path: '/recruiter/jobs/:jobId/applications',
      name: 'recruiter-applications',
      component: () => import('@/views/RecruiterApplicationsView.vue'),
    },
    {
      path: '/my/applications',
      name: 'my-applications',
      component: () => import('@/views/MyApplicationsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/jobs',
    },
  ],
})

export default router
