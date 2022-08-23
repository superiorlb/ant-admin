import { useState } from 'react'
import { Layout, Breadcrumb, Avatar, Badge, Descriptions, Menu, Dropdown } from 'antd'
import {
  FullscreenOutlined,
  MessageOutlined,
  ContactsOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons'
import useLocationParams from '../../hook/useLocationParams'
import routes from '../../router'
import Dialog from '../../components/dialog/dialog'
import screenfull from 'screenfull';
import useNavigateTo from '../../hook/useNavigateTo'
import { removeToken } from '../../utils/token'
import Message from '../../utils/message'
const { Header } = Layout
const UserInfo = () => <Descriptions title="User Info">
  <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
  <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
  <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
  <Descriptions.Item label="Remark">empty</Descriptions.Item>
  <Descriptions.Item label="Address">
    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
  </Descriptions.Item>
</Descriptions>
export default function Head() {
  const [visible, setVisible] = useState(false)
  const [isScreenFull, setIsScreenFull] = useState(false)
  const navigateTo = useNavigateTo()
  const { path } = useLocationParams()
  const handleOK = () => {

  }
  const handleScreenFull = () => {
    setIsScreenFull(!isScreenFull)
    screenfull.toggle();
  }
  const handleMenuClick = (e) => {
    const { key } = e
    navigateTo(key)
    if (key === 'login') {
      removeToken()
      Message('success', '退出登录')
    }

  }
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: 'message',
          label: '查看消息'
        },
        {
          key: 'login',
          label: '退出登录'
        },
      ]}
    />
  );
  let title
  routes.forEach(item => { if (item.path === path) title = item.title })
  return (
    <Header>
      <Breadcrumb>
        <Breadcrumb.Item><a href="/">控制台</a></Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href={path}>{title}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='ant-header-right'>
        <Badge count={20}>
          <MessageOutlined onClick={() => navigateTo('message')} style={{ fontSize: 20 }} />
        </Badge>
        <ContactsOutlined onClick={() => setVisible(true)} />
        <div onClick={handleScreenFull}>
          {
            isScreenFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />
          }
        </div>
        <Dropdown overlay={menu}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Dropdown>
      </div>
      <Dialog visible={visible} setVisible={setVisible} sure={handleOK} content={<UserInfo />} />
    </Header>
  )
}
