import React from 'react'

export default class OtherComponent extends React.Component {
  state = {}

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log(prevState)
    console.log(nextProps)
  }

  render () {
    return <>
      <h1>OtherComponent{this.props.msg}{this.props.name}</h1>
      <button onClick={this.props.changeName}>改变name</button>
    </>
  }
}

OtherComponent.defaultProps = {
  msg: '熊程峰'
}
