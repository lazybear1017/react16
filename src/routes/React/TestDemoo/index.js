import React from 'react'
import { Row, Col } from '@uyun/components'
import PageHeader from '@/components/PageHeader'

export default class TestDemoo extends React.Component {
  render () {
    return <div>
      <PageHeader />
      <h1>高阶组件是参数为组件，返回值为新组件的函数。</h1>
      <h3>组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。</h3>
      <h3>请注意，HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。</h3>
      <div>熊程峰</div>
      <h1>{this.props.msg}</h1>
      <Row gutter={16}>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={4}><div>col-4</div></Col>
        <Col span={4}><div>col-4</div></Col>
        <Col span={4}><div>col-4</div></Col>
        <Col span={4}><div>col-4</div></Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>col-8</Col>
      </Row>
    </div>
  }
}

TestDemoo.defaultProps = {
  msg: '熊程峰'
}
