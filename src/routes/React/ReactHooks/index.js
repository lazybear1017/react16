import React, { useState, useEffect } from 'react'
import { Button, Modal } from '@uyun/components'
import PageHeader from '@/components/PageHeader'

const useModal = (initTitle, initContent) => {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState(initTitle)
  const [content, setContent] = useState(initContent)
  const CustomModal = () => {
    return (
      <Modal
        visible={visible}
        title={title}
        closable={false}
        onCancel={hide}
      >
        {content}
      </Modal>
    )
  }
  const show = (content) => {
    content && setContent(content)
    setVisible(true)
  }
  const hide = (delay) => {
    if (delay) {
      setTimeout(() => setVisible(false), delay)
    } else {
      setVisible(false)
    }
  }
  return {
    show, hide, CustomModal, setTitle, setContent
  }
}

export default props => {
  const { hide, show, CustomModal } = useModal('系统提示', '正在初始化...')

  const [count, setCount] = useState(0)
  const [name, changeName] = useState('先吃饭')

  useEffect(() => {
    document.title = `你点击了${count}次！`
    console.log(count)
  })

  return (
    <div>
      <PageHeader />
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <h3>{name}</h3>
      <Button type="error" onClick={() => changeName('熊程峰')}>改变名字</Button>
      <h3>{props.xcfProps}</h3>
      <div><CustomModal /></div>
      <Button type="primary" onClick={() => show()}>Modal</Button>
    </div>
  )
}
