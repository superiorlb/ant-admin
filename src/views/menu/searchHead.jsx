import { useState } from 'react'
import { SearchOutlined,RedoOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, DatePicker, Select, Row, Col } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
const formData = { menuName: '', address: '', url: '', createTime: [], admin: '', isShow: '', isUse: '' }
export default function SearchHead() {
    const [forms]=Form.useForm()
    const [form, setForm] = useState(formData)
    const handleName = (e) => {
        setForm({
            ...form,
            menuName: e.target.value
        })
    }
    const handleAddress = (e) => {
        setForm({
            ...form,
            address: e.target.value
        })
    }
    const handleCreateTime = (e, dateString) => {
        setForm({
            ...form,
            createTime: dateString
        })
    }
    const handleIsShow = (e) => {
        setForm({
            ...form,
            isShow: e
        })
    }
    const handleAdmin = (e) => {
        setForm({
            ...form,
            admin: e
        })
    }
    const handleUrl = (e) => {
        setForm({
            ...form,
            url: e.target.value
        })
    }
    const handleIsUse = (e) => {
        setForm({
            ...form,
            isUse: e
        })
    }
    const onReset = () => {
       forms.resetFields()
    }
    return (
        <Card>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                form={forms}
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item
                            label="菜单名称"
                            name="menuName"
                        >
                            <Input value={form.menuName} onChange={handleName} placeholder='请输入菜单名称' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="菜单地址"
                            name="address"
                        >
                            <Input value={form.address} onChange={handleAddress} placeholder='请输入菜单地址' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="菜单路径"
                            name='url'
                        >
                            <Input value={form.url} onChange={handleUrl} placeholder='请输入菜单路径' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="创建时间"
                            name="createTime"
                        >
                            <RangePicker value={form.createTime} onChange={handleCreateTime} placeholder={['开始时间 ', '结束时间']} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="创建人"
                            name="admin"
                        >
                            <Select placeholder="请选择创建人" value={form.admin} onChange={handleAdmin}>
                                <Option value="1">Jon</Option>
                                <Option value="2">Mike</Option>
                                <Option value="3">Boob</Option>
                                <Option value="4">Jack</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="是否隐藏"
                            name="isShow"
                        >
                            <Select placeholder="请选择" value={form.isShow} onChange={handleIsShow}>
                                <Option value="1">是</Option>
                                <Option value="2">否</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="是否可用"
                            name="isUse"
                        >
                            <Select placeholder="请选择" value={form.isUse} onChange={handleIsUse}>
                                <Option value="1">是</Option>
                                <Option value="2">否</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button type="primary" icon={<SearchOutlined />}>
                            Search
                        </Button>
                        <Button onClick={onReset} style={{ marginLeft: 10 }} type="primary" icon={<RedoOutlined />}>
                            Reset
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
