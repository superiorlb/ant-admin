import { useLocation } from "react-router-dom";
const useLocationParams = () => {
    const location = useLocation()
    const { hash, key, pathname, search, state } = location
    const path = pathname.split('/')[1] ? pathname.split('/')[1] : '/'
    return {
        hash, key, path, search, state
    }
}

export default useLocationParams