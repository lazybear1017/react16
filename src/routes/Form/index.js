import React from 'react'
import { Form, Input, Button, Icon, Tooltip, DatePicker } from '@uyun/components'
import PageHeader from '@/components/PageHeader'

const FormItem = Form.Item
@Form.create({
  onFieldsChange: (props, fields) => {
    // console.log(props, fields)
  },
  onValuesChange: (props, values) => {
    // console.log(props, values)
  }
})
class BasicForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  componentDidMount () {
    this.props.form.setFieldsValue({
      name: '熊程峰',
      password: 'xcf586615'
    })
  }

  getFields = () => {
    console.log(this.props.form.getFieldsValue())
  }

  getFields1 = () => {
    console.log(this.props.form.getFieldValue('name'))
  }

  getFieldsError = () => {
    console.log(this.props.form.getFieldError('name'))
  }

  setFields = () => {
    this.props.form.setFields({
      name: {
        value: '科比',
        errors: [new Error('forbid ha')]
      }
    })
  }

  isChecked = () => {
    console.log(this.props.form.isFieldsTouched())
  }

  reset = () => this.props.form.resetFields()

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <PageHeader />
        <Form
          onSubmit={this.handleSubmit}
          layout="inline"
          hideRequiredMark
        >
          <FormItem
            label={(
              <span>
                姓名&nbsp;
                <Tooltip title="What do you want other to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: '请输入姓名' }
              ],
              initialValue: '詹姆斯'
              // hidden: true
              // validateTrigger: 'onClick'
              // getValueFromEvent: e => {
              //   console.log(e.target.value)
              //   return e.target.value + '隆多'
              // }
            })(<Input />)}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator('password', {
              rules: [
                { required: true }
              ]
            })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} />)}
          </FormItem>
          <FormItem label="日期">
            {getFieldDecorator('date')(
              <DatePicker />
            )}
          </FormItem>
          <FormItem >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </FormItem>
        </Form>
        <Button onClick={this.getFields}>获取所有值</Button>
        <Button onClick={this.getFields1}>获取单个值</Button>
        <Button onClick={this.getFieldsError}>获取Error</Button>
        <Button onClick={this.setFields}>设置值与Error</Button>
        <Button onClick={this.isChecked}>判断1</Button>
        <Button onClick={this.reset}>重置</Button>
      </div>
    )
  }
}

export default BasicForm
