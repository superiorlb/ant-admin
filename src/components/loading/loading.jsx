import { useEffect } from "react";
import "nprogress/nprogress.css";
import NProgress from 'nprogress'
import './loading.css'
export default function Loading() {
    NProgress.start()
    useEffect(() => {
        NProgress.done()
    })
    return (
        <div className='loading'>loading...</div>
    )
}
NProgress.configure({ easing: 'ease', speed: 500 });