import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import Sidebar from './sidebar';
import Head from './head';
import './layout.scss'
import useNavigateTo from '../../hook/useNavigateTo';
import { getToken } from '../../utils/token';
const token = getToken()
const { Content } = Layout
export default function Layouts() {
    const navigateTo = useNavigateTo()
    useEffect(() => {
        !token && navigateTo('login')
    })
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <Head />
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
