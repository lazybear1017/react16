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
    redirect: '/pandect'
  },
  {
    path: '/pandect',
    component: lazy(() => import('@/routes/Pandect'))
  },
  {
    path: '/html',
    redirect: '/html/analysis',
    routes: [
      {
        path: '/html/analysis',
        component: lazy(() => import('@/routes/Analysis'))
      },
      {
        path: '/html/table',
        component: lazy(() => import('@/routes/Table'))
      },
      {
        path: '/html/form',
        component: lazy(() => import('@/routes/Form'))
      }
    ]
  },
  {
    path: '/react',
    redirect: '/react/kernel',
    routes: [
      {
        path: '/react/kernel',
        component: lazy(() => import('@/routes/React/Kernel'))
      },
      {
        path: '/react/highOrder',
        component: lazy(() => import('@/routes/React/HighOrder'))
      },
      {
        path: '/react/testDemo',
        component: lazy(() => import('@/routes/React/TestDemo'))
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
