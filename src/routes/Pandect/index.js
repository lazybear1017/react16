import React, { useState, useEffect } from 'react'
import { Button } from '@uyun/components'
import PageHeader from '@/components/PageHeader'
import './index.less'

const Example = props => {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0)
  const [name, changeName] = useState('先吃饭')

  useEffect(() => {
    console.log(count)
    document.title = `你点击了${count}次！`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <h3>{name}</h3>
      <Button type="error" onClick={() => changeName('熊程峰')}>改变名字</Button>
      <h3>{props.xcfProps}</h3>
    </div>
  )
}

export default class Pandect extends React.Component {
  render () {
    return <div className="pandect-wrapper">
      <PageHeader />
      <h1>熊程峰</h1>
      <Example xcfProps="xcfProps先吃饭" />
    </div>
  }
}
