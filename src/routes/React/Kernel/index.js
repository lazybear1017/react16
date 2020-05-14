import React from 'react'
import PageHeader from '@/components/PageHeader'

export default class Kernel extends React.Component {
  render () {
    return <div>
      <PageHeader />
      <h1>核心概念</h1>
      <h2>Props 的只读性</h2>
      <h3>所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。</h3>
      <h4>纯函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。</h4>
      <br />
      <h2>数据是向下流动的</h2>
      <h4>不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。这就是为什么称 state 为局部的或是封装的的原因</h4>
      <h3>React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递。</h3>
    </div>
  }
}
