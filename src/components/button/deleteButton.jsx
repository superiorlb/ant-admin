import { Popconfirm, Button } from 'antd';
import PropTypes from 'prop-types'
import React from 'react';
import Message from '../../utils/message';
const cancel = () => {
    Message('warning', "已取消")
};
export default function DeleteButton({ children, type, text, sure }) {
    const confirm = () => {
        sure()
        Message('success', '删除成功')
    };
    return (
        <Popconfirm
            title="确认删除吗?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="是"
            cancelText="否"
        >
            <Button danger type={type}>{children ? children : text}</Button>
        </Popconfirm>
    )
}
DeleteButton.propTypes = {
    sure: PropTypes.func
}
DeleteButton.defaultProps = {
    type: 'text',
    text: 'Delete'
}