import { useState, useEffect } from 'react'
import CardAdd from '../../components/cardAdd';
import Dialog from '../../components/dialog/dialog';
import TableList from '../../components/table/tableList';
import SearchHead from '../menu/searchHead';
import { getMenuList } from '../../api/index'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
const columns = [
  {
    title: '菜单名字',
    dataIndex: 'name',
    align: 'center'

  },
  {
    title: '菜单标识',
    dataIndex: 'id',
    align: 'center'

  },
  {
    title: '菜单地址',
    dataIndex: 'menuUrl',
    align: 'center'

  },
  {
    title: '菜单图标',
    dataIndex: 'icon',
    align: 'center'

  },
  {
    title: '菜单路径',
    dataIndex: 'url',
    align: 'center'

  },
  {
    title: '是否可用',
    dataIndex: 'is',
    render: (is) => is ? <CheckOutlined /> : <CloseOutlined />,
    align: 'center'
  },
];
export default function Menu() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([])
  const getList = async () => {
    const { data } = await getMenuList()
    data.forEach(item => {
      item.key = item.id
      item?.children && item.children.forEach(i => i.key = i.id)
    })
    setData(data)
  }
  const handleAdd = () => {
    setVisible(true)
  }
  const handleOK = () => {

  }
  useEffect(() => {
    getList()
  })
  const tableConfig = {
    data,
    columns,
    title: 'Header',
    footer: 'Footer',
    total: data.length
  }
  const dialogConfig = {
    visible,
    setVisible,
    sure: handleOK
  }
  return (
    <div>
      <SearchHead />
      <CardAdd submit={handleAdd} />
      <TableList {...tableConfig} />
      <Dialog {...dialogConfig} />
    </div>
  )
}
