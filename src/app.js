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
import { LocaleProvider, Icon, Button } from '@uyun/components'
import { history, renderRoutes } from './utils/router'
import enUS from '@uyun/components/lib/locale-provider/en_US'
import zhCN from '@uyun/components/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
import './app.less'

intl.merge(locales)
moment.locale('zh-cn')
moment.defaultFormat = 'YYYY-MM-DD HH:mm'

Menus.displayName = 'xcf'
// const xcfStores = React.createContext({})
// xcfStores.displayName = 'xiongcf'
export default class App extends PureComponent {
  state = {
    collapsed: false
  }

  get menus () {
    const { collapsed } = this.state
    return [
      {
        key: 'create',
        type: 'component',
        component: (
          <div style={{
            padding: collapsed ? '0 5px 10px' : '0 20px 10px',
            transition: 'all 0.3s'
          }}>
            <Button
              style={{
                width: '100%',
                padding: '0 5px',
                transition: 'all 0.3s'
              }}
              type="primary"
              size="large"
            >
              {
                collapsed ? <Icon type="plus" /> : <div><Icon type="plus" />  创建</div>
              }
            </Button>
          </div>
        )
      },
      {
        key: 'pandect',
        name: '总览',
        type: 'link',
        icon: <i className="iconfont icon-pandect" />,
        path: 'pandect'
      },
      {
        key: 'html',
        name: 'HTML',
        type: 'sub',
        path: 'html',
        icon: <i className="iconfont icon-html" />,
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
        key: 'react',
        name: 'REACT',
        type: 'sub',
        path: 'react',
        icon: <i className="iconfont icon-react" />,
        children: [
          {
            key: 'kernel',
            name: '核心概念',
            type: 'link',
            icon: <i className="iconfont icon-kernel" />,
            path: 'kernel'
          },
          {
            key: 'highOrder',
            name: '高阶指引',
            type: 'link',
            icon: <i className="iconfont icon-high-order" />,
            path: 'highOrder'
          },
          {
            key: 'testDemo',
            name: '测试示例',
            type: 'link',
            icon: <i className="iconfont icon-demo-test" />,
            path: 'testDemo'
          },
          {
            key: 'gaojiezujian',
            name: '高阶组件',
            type: 'link',
            icon: <i className="iconfont icon-demo-test" />,
            path: 'gaojiezujian'
          },
          {
            key: 'reacthooks',
            name: 'Hooks',
            type: 'link',
            icon: <i className="iconfont icon-demo-test" />,
            path: 'reacthooks'
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
    const { collapsed } = this.state
    return (
      <Provider {...stores}>
        <LocaleProvider locale={locale}>
          <Menus.Provider value={this.menus}>
            {/* <xcfStores.Provider value={stores}> */}
            <Router history={history}>
              <BasicLayout
                sideMenu={{
                  items: this.menus,
                  Link: Link,
                  collapsed: collapsed,
                  onCollapse: (collapsed) => {
                    this.setState({ collapsed })
                  }
                }}>
                {renderRoutes(router)}
              </BasicLayout>
            </Router>
            {/* </xcfStores.Provider> */}
          </Menus.Provider>
        </LocaleProvider>
      </Provider>
    )
  }
}
