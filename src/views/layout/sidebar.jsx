import { useState } from 'react'
import useLocationParams from '../../hook/useLocationParams';
import useNavigateTo from '../../hook/useNavigateTo';
import { AppstoreOutlined, SettingOutlined, DashboardOutlined, UserOutlined, TeamOutlined, PicLeftOutlined, PicRightOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd'
const { Sider } = Layout
const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('控制台', '/', <DashboardOutlined />),
    getItem('权限管理', 'system', <SettingOutlined />, [
        getItem('管理员管理', 'admin', <UserOutlined />),
        getItem('菜单管理', 'menu', <AppstoreOutlined />),
        getItem('角色管理', 'role', <TeamOutlined />),
    ])
];
export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo = useNavigateTo()
    const { path } = useLocationParams()
    let element = collapsed ? <PicRightOutlined /> : <PicLeftOutlined />
    const onClick = (e) => {
        const { key } = e
        navigateTo(key, { replace: true })
    };
    return (
        <Sider collapsed={collapsed}>
            <div className='logo'>{collapsed ? null : 'AntAdmin'}<span onClick={() => setCollapsed(!collapsed)}>{element}</span></div>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={[path]}
                mode="inline"
                items={items}
            />
        </Sider>
    )
}
