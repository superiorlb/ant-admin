import PropTypes from 'prop-types'
import { Modal } from "antd"
// import Message from '../../utils/message'
const handleDefaultCancel = () => {
    // Message('warning', '已取消')
}
export default function Dialog(props) {
    const { title, children, content, width, visible, setVisible, sure, cancel } = props
    const handleOK = () => {
        sure()
        setVisible(false)
    }
    const handleCancel = () => {
        cancel()
        setVisible(false)
    }
    return (
        <Modal title={title} visible={visible} onOk={handleOK} onCancel={handleCancel} width={width}>
            {
                children ? children : content
            }
        </Modal>
    )
}

Dialog.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,
    width: PropTypes.string,
    cancel: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    sure: PropTypes.func.isRequired
}
Dialog.defaultProps = {
    title: 'Not Title',
    content: 'Not Content',
    width: '50%',
    cancel: handleDefaultCancel,
}
