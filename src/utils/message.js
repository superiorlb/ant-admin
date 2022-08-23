import { message } from "antd";
const Message = (type, content, duration = 1.5) => {
    message[type]({ content, duration })
}
export default Message