import { lazy } from 'react'

export default [
  /**
   * 开发环境跳/login_admin重定向到/
   */
  process.env.NODE_ENV === 'development' && {
    path: '/login_admin',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/analysis',
    routes: [
      {
        path: '/dashboard/analysis',
        component: lazy(() => import('@/routes/Analysis'))
      },
      {
        path: '/dashboard/table',
        component: lazy(() => import('@/routes/Table'))
      },
      {
        path: '/dashboard/form',
        component: lazy(() => import('@/routes/Form'))
      }
    ]
  },
  {
    path: '/user-role',
    component: lazy(() => import('@/routes/UserRole'))
  },
  {
    path: '*',
    component: lazy(() => import('@/routes/NotFound'))
  }
].filter(Boolean)
