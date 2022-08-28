import { message } from "antd";
/**
 * 全局提示
 * @param {string} type 消息类型 
 * @param {string} content 提示内容
 * @param {number} duration 显示时长
 */
const Message = (type, content, duration = 1.5) => {
    message[type]({ content, duration })
}
export default Message