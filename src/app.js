import moment from 'moment'
import router from './router'
import { stores } from './stores'
import Menus from './common/menu'
import { Provider } from 'mobx-react'
import cookie from '@uyun/utils/cookie'
import __, { intl } from '@uyun/utils/i18n'
import locales from './common/locales.json'
import React, { PureComponent } from 'react'
import BasicLayout from '@uyun/ec-basic-layout'
import { Router, Link } from 'react-router-dom'
import { LocaleProvider, Icon } from '@uyun/components'
import { history, renderRoutes } from './utils/router'
import enUS from '@uyun/components/lib/locale-provider/en_US'
import zhCN from '@uyun/components/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

intl.merge(locales)
moment.locale('zh-cn')
moment.defaultFormat = 'YYYY-MM-DD HH:mm'

export default class App extends PureComponent {
  get menus () {
    return [
      {
        key: 'dashboard',
        name: __('menu-dashboard'),
        type: 'group',
        path: 'dashboard',
        children: [
          {
            key: 'analysis',
            name: __('menu-analysis'),
            type: 'link',
            icon: <Icon type="pie-chart" />,
            path: 'analysis'
          },
          {
            key: 'table',
            name: __('menu-table'),
            type: 'link',
            icon: <Icon type="table" />,
            path: 'table'
          },
          {
            key: 'form',
            name: __('menu-form'),
            type: 'link',
            icon: <Icon type="file-text" />,
            path: 'form'
          }
        ]
      },
      {
        key: 'search',
        name: __('menu-search'),
        type: 'default',
        icon: <Icon type="search" />,
        below: true
      },
      {
        key: 'user-role',
        name: __('menu-user-role'),
        type: 'link',
        icon: <Icon type="setting" />,
        path: 'user-role',
        below: true
      },
      {
        key: 'help',
        name: __('menu-help'),
        type: 'link',
        icon: <Icon type="question-circle" />,
        path: 'https://www.baidu.com',
        target: '_blank',
        below: true
      }
    ]
  }

  render () {
    const locale = cookie.get('language') === 'en_US' ? enUS : zhCN

    return (
      <Provider {...stores}>
        <LocaleProvider locale={locale}>
          <Menus.Provider value={this.menus}>
            <Router history={history}>
              <BasicLayout sideMenu={{ items: this.menus, Link: Link }}>{renderRoutes(router)}</BasicLayout>
            </Router>
          </Menus.Provider>
        </LocaleProvider>
      </Provider>
    )
  }
}
