import PropTypes from 'prop-types'
import { Card, Button } from "antd"
import { PlusOutlined } from '@ant-design/icons'
export default function CardAdd(props) {
    const { submit } = props
    const handleClick = (val) => {
        submit(val)
    }
    return (
        <Card>
            <Button type="primary" onClick={handleClick} icon={<PlusOutlined />}>添加</Button>
        </Card>
    )
}
CardAdd.propTypes = {
    submit: PropTypes.func.isRequired
}