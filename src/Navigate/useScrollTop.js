import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function useScrollTop() {
   const pathname = useLocation();
    useEffect(()=>{

        if ('scrollRestoration' in window.history){
            window.history.scrollRestoration = 'manual'
        }
        window.scrollTo({
            top:0,
            left:0,
            behavior:"instant"
        });
    },[pathname])
}

export default useScrollTop
