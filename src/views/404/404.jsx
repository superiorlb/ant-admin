import { Button, Result } from 'antd';
import useNavigateTo from '../../hook/useNavigateTo';
export default function NotFound() {
    const navigateTo = useNavigateTo()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => navigateTo('/')} >Back Home</Button>}
        />
    )
}
