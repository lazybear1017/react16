import React, { Suspense } from 'react'
import PageHeader from '@/components/PageHeader'
import Menus from '../../../common/menu'

const FuncBorder = props => <div className={props.color}>
  {props.children}
</div>

const ThemeContext = React.createContext('light')
class Time extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    msg: '熊程峰'
  }

  myRef = React.createRef()

  // static contextType = ThemeContext;
  static contextType = Menus

  componentDidMount () {
    console.log(this.myRef.current)
    this.myRef.current.focus()
    console.log(this.context)
    console.log(this.context)
    console.log(this.refs.ddd.offsetWidth)
    this.setState({ date: new Date().toLocaleTimeString() })
    this.timer = setInterval(() => this.setState({ date: new Date().toLocaleTimeString() }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <>
      <h2>{this.state.date}</h2>
      <h1 style={{ color: 'red' }} ref="ddd">{this.state.msg}</h1>
      <input type="text" ref={this.myRef} />
    </>
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

const OtherComponent = React.lazy(() => import('./OtherComponent'))
export default class TestDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showWarning: true,
      name: 'james'
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
  }))

  componentDidMount () {
    console.log(this.refs.xcf.state)
    this.refs.xcf.setState({ msg: '熊程峰熊程峰111' })
  }

  changeName=() => this.setState({ name: '高科技' })

  render () {
    return <div>
      <ThemeContext.Provider value="dark">
        <PageHeader />
        <Time ref="xcf" />
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
        <FuncBorder color="red">
          <h1 data-xcf="xcf">FuncBorder熊程峰</h1>
        </FuncBorder>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent name={this.state.name} changeName={this.changeName} />
        </Suspense>
      </ThemeContext.Provider>
    </div>
  }
}
