import React, { useState } from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd'
import './login.scss'
import Message from '../../utils/message'
import useNavigateTo from '../../hook/useNavigateTo'
import { login } from '../../api/index'
import { setToken } from '../../utils/token'
import { useDispatch } from 'react-redux';
import { handleSetToken } from '../../store/login';
const userData = {
    name: null,
    password: null
}
export default function Login() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(userData)
    const navigateTo = useNavigateTo()
    const handleName = (e) => {
        setUser({
            ...user,
            name: e.target.value.trim()
        })
    }
    const handlePassword = (e) => {
        setUser({
            ...user,
            password: e.target.value.trim()
        })
    }
    const handleLogin = async () => {
        if (!user?.name || !user.name) {
            Message('error', '账号不能为空')
            return
        }
        if (!user?.password || !user.password) {
            Message('error', '密码不能为空')
            return
        }
        if (user.name !== 'admin') {
            Message('error', '账号错误')
            return
        }
        if (user.password !== '123456') {
            Message('error', '密码错误')
            return
        }
        const res = await login()
        const { token } = res.data
        setToken(token)
        dispatch(handleSetToken(token))
        navigateTo('/')
        Message('success', '登录成功')
    }
    return (
        <div className='main'>
            <div className='content'>
                <h1>Ant Admin</h1>
                <p>
                    <Input value={user.name} onChange={handleName} prefix={<UserOutlined />} allowClear />
                </p>
                <p>
                    <Input.Password onChange={handlePassword} value={user.password} prefix={<LockOutlined />} allowClear />
                </p>
                <p>
                    <Button onClick={handleLogin} type='primary'>登录</Button>
                </p>
            </div>
        </div>
    )
}
