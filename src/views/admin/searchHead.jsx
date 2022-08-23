import { useState } from 'react'
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, DatePicker, Select, Row, Col } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
const formData = { adminName: '', phone: '', createTime: [], isUse: '', branch: '', leader: '' }
export default function SearchHead() {
    const [forms] = Form.useForm()
    const [form, setForm] = useState(formData)
    const handleName = (e) => {
        setForm({
            ...form,
            adminName: e.target.value
        })
    }
    const handlePhone = (e) => {
        setForm({
            ...form,
            phone: e.target.value
        })
    }
    const handleCreateTime = (e, dateString) => {
        setForm({
            ...form,
            createTime: dateString
        })
    }
    const handleBranch = (e) => {
        setForm({
            ...form,
            branch: e
        })
    }
    const handleLeader = (e) => {
        setForm({
            ...form,
            leader: e
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
                form={forms}
                autoComplete="off"
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item
                            label="管理员姓名"
                            name="adminName"
                        >
                            <Input value={form.name} onChange={handleName} placeholder='请输入管理员姓名' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="联系方式"
                            name="phone"
                        >
                            <Input value={form.phone} onChange={handlePhone} placeholder='请输入联系人号码' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="创建时间"
                            name="createTime"
                        >
                            <RangePicker value={form.searchTime} onChange={handleCreateTime} placeholder={['开始时间 ', '结束时间']} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="所属部门"
                            name='branch'
                        >
                            <Select value={form.branch} onChange={handleBranch} placeholder="请选择所属部门">
                                <Option value="1">信息部</Option>
                                <Option value="2">运营部</Option>
                                <Option value="3">开发部</Option>
                                <Option value="4">销售部</Option>
                                <Option value="5">行政部</Option>
                                <Option value="6">财务部</Option>
                                <Option value="7">后勤部</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="上级领导"
                            name="leader"
                        >
                            <Select value={form.leader} onChange={handleLeader} placeholder="请选择">
                                <Option value="1">Jon</Option>
                                <Option value="2">Mike</Option>
                                <Option value="3">Boob</Option>
                                <Option value="4">Jack</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="是否可用"
                            name="isUse"
                        >
                            <Select value={form.isUse} onChange={handleIsUse} placeholder="请选择">
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
