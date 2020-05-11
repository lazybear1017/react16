import React from 'react'
import UserRole from '@uyun/ec-user-role'
import './index.less'

export default class extends React.Component {
  handleSelectRole (roleId, item) {
    console.log('Role: ', roleId, item)
  }

  handleSelectGroup (groupId, item) {
  }

  render () {
    return (
      <div className="user-role">
        {/* 文档产考：http://docs.uyundev.cn/#/resources/documents/5d8b06f863e9b474cbfdf00c */}
        <UserRole productName="UserRole" onSelectRole={this.handleSelectRole} onSelectGroup={this.handleSelectGroup} />
      </div>
    )
  }
}
