import React from 'react'
import PageHeader from '@/components/PageHeader'

class Time extends React.Component {
  state = {
    data: new Date().toLocaleTimeString()
  }

  componentDidMount () {
    this.setState({ date: new Date().toLocaleTimeString() })
    this.timer = setInterval(() => this.setState({ date: new Date().toLocaleTimeString() }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <h2>{this.state.date}</h2>
  }
}

const Welcome = props => <h2>你好呀{props.name}</h2>

function WarningBanner (props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

export default class TestDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showWarning: true
    }
    this.testThis4 = this.testThis4.bind(this)
  }

  testThis = () => console.log(this)

  testThis2 () {
    console.log(this)
  }

  testThis3 () {
    console.log(this)
  }

  testThis4 () {
    console.log(this)
  }

  handleToggleClick = () => this.setState(state => ({
    showWarning: !state.showWarning
  }));

  render () {
    return <div>
      <PageHeader />
      <Time />
      <Welcome name="熊程峰" />
      <button onClick={this.testThis}>点击测试this</button>
      <button onClick={this.testThis2}>点击测试this2</button>
      <button onClick={() => { this.testThis3() }}>点击测试this3</button>
      <button onClick={this.testThis4}>点击测试this4</button>
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  }
}
