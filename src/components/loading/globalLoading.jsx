import { useEffect } from "react";
import "nprogress/nprogress.css";
import NProgress from 'nprogress'
import './globalLoading.css'
export default function GlobalLoading() {
    NProgress.start()
    useEffect(() => {
        NProgress.done()
    })
    return (
        <div className='loading'>loading...</div>
    )
}
NProgress.configure({ easing: 'ease', speed: 500 });