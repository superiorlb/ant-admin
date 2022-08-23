import React from "react";
const Admin = React.lazy(() => import('../views/admin/admin'))
const Menu = React.lazy(() => import('../views/menu/menu'))
const Role = React.lazy(() => import('../views/role/role'))
const Message = React.lazy(() => import('../views/message/message'))
const routes = [
    // {
    //     path: 'dashboard',
    //     element: <Dashboard />,
    //     title:'控制台'
    // },
    {
        path: 'admin',
        element: <Admin />,
        title: '管理员管理'
    },
    {
        path: 'menu',
        element: <Menu />,
        title: '菜单管理'
    },
    {
        path: 'role',
        element: <Role />,
        title: '角色管理'
    },
    {
        path: 'message',
        element: <Message />,
        title: '消息列表'
    },

]
export default routes