import { message, Popconfirm, Button } from 'antd';
// import PropTypes from 'prop-types'
import React from 'react';

const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
};

const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

export default function DeleteButton(props) {
    const { children, type, text } = props
    return (
        <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button danger type={type}>{children ? children : text}</Button>
        </Popconfirm>
    )
}
DeleteButton.defaultProps = {
    type: 'text',
    text: 'Delete'

}