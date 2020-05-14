import React from 'react'

export default class OtherComponent extends React.Component {
  render () {
    return <h1>OtherComponent{this.props.msg}</h1>
  }
}

OtherComponent.defaultProps = {
  msg: '熊程峰'
}
