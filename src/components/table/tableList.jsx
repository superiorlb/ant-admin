import { useState } from 'react'
import { Table } from "antd"
import PropTypes from 'prop-types'
export default function TableList(props) {
    const { columns, data, border, title, footer, total } = props
    const [current, setCurrent] = useState(1)
    const onChange = (current) => {
        setCurrent(current)
    }
    const showTotal = () => `共${total}条`
    const [pageSize, setPageSize] = useState(10)
    const onShowSizeChange = (current, size) => {
        setPageSize(size)
    }
    return (
        <Table
            columns={columns}
            // expandable={{
            //     childrenColumnName: 'children',
            //     defaultExpandAllRows: true,
            // }}
            dataSource={data}
            bordered={border}
            title={() => title}
            footer={() => footer}
            pagination={{
                current,
                pageSize,
                total,
                showQuickJumper: true,
                onChange,
                onShowSizeChange,
                showTotal,
            }}
        />
    )
}
TableList.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    title: PropTypes.string,
    footer: PropTypes.string
}
TableList.defaultProps = {
    border: true,
}