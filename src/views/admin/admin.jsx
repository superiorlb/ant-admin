import { useState, useEffect } from 'react'
import SearchHead from './searchHead';
import TableList from '../../components/table/tableList'
import CardAdd from '../../components/cardAdd';
import Dialog from '../../components/dialog/dialog';
import Message from '../../utils/message';
import { getAdminList } from '../../api/index'
import Loading from '../../components/loading/Loading'
import { Tag } from 'antd';
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        align: 'center'

    },
    {
        title: 'Name',
        dataIndex: 'name',
        align: 'center',
        render: (name) => <Tag color='processing'>{name}</Tag>

    },
    {
        title: 'IP',
        dataIndex: 'ip',
        align: 'center'

    },
    {
        title: 'Address',
        dataIndex: 'address',
        align: 'center'

    },
    {
        title: 'Date',
        dataIndex: 'date',
        align: 'center'

    },
    {
        title: 'Url',
        dataIndex: 'url',
        align: 'center'

    },
];
export default function Admin() {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const handleAdd = (val) => {
        setVisible(true)
    }
    const handleOk = () => {
        Message('success', '提交成功')
    }
    const getList = async () => {
        setLoading(true)
        const { data } = await getAdminList()
        setLoading(false)
        data.forEach(item => {
            item.key = item.id
        })
        setData(data)
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <div>
            <SearchHead />
            <CardAdd submit={handleAdd} />
            <Loading loading={loading}>
                <TableList data={data} columns={columns} border total={data.length} />
            </Loading>
            <Dialog title="添加管理员" visible={visible} setVisible={setVisible} sure={handleOk} />

        </div>
    )
}
