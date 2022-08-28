import React, { useEffect, useState } from 'react'
import { Avatar, List, Card, Button, Input, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import './message.scss'
import DeleteButton from '../../components/button/deleteButton';
import { getMessageList } from '../../api';
import Dialog from '../../components/dialog/dialog'
import Loading from '../../components/loading/Loading';
const { TextArea } = Input
const title = <span><MessageOutlined />  回复</span>
const IconText = ({ icon, text = '暂无回复' }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
let index = 0
export default function Message() {
    const [value, setValue] = useState('')
    const content = <TextArea value={value} onChange={(e) => setValue(e.target.value)} placeholder='请输入回复内容' />
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getList = async () => {
        setLoading(true)
        const { data } = await getMessageList()
        setLoading(false)
        setData(data)
    }
    const handleOK = () => {
        data[index].text = value
    }
    const open = (i) => {
        index = i
        setVisible(true)
    }
    const handleDelete = (i) => {
        data.splice(i, 1)
        setData([...data])
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <>
            <Loading loading={loading}>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <Card>
                            <List.Item
                                key={index}
                                extra={[
                                    <Button key='reply' type='text' onClick={() => open(index)}>回复</Button>,
                                    <DeleteButton sure={() => handleDelete(index)} key="delete" text='删除' />
                                ]}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text={item.text} key="list-vertical-message" />
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={<a href="https://ant.design">{item.name}</a>}
                                    description={item.content}
                                />
                            </List.Item>
                        </Card>
                    )}
                />
            </Loading>
            <Dialog title={title} visible={visible} setVisible={setVisible} sure={handleOK} content={content} />
        </>
    )
}
