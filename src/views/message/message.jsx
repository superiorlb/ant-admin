import { useEffect, useState } from 'react'
import { Avatar, List, Card, Button } from 'antd';
import './message.scss'
import DeleteButton from '../../components/button/deleteButton';
import { getMessageList } from '../../api';
export default function Message() {
    const [data, setData] = useState([])
    const getList = async () => {
        const { data } = await getMessageList()
        setData(data)
    }
    useEffect(() => {
        getList()
    },[])
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <Card>
                    <List.Item actions={[
                        <Button type='text'>Reply</Button>,
                        <DeleteButton />]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.content}
                        />
                    </List.Item>
                </Card>
            )}
        />
    )
}
