import { createToaster, Toaster, useToastStyles } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { toaster } from '../components/ui/toaster'

function useShowToast() {
    
    // console.log("object")
    const promise = new Promise((resolve)=>{
        setTimeout(()=>resolve(), 3000)
    });

    // toaster.promise(promise,{
        // success:{
        //     title:"Email sent successfully."
        // },
        // error:{
        //     title:"Failed to send email, try again."
        // },
    //     loading:{
    //         title:"Sending..."
    //     }
    // })

    const successToast = () => toaster.create({
        type:"success",
        title:'Email sent successfully!'
    })

    const errorToast = () => toaster.create({
        type:"error",
        title:"Failed to send email, try again."
    });

    const infoToast = () => toaster.create({
        type:"info",
        title:"Please fill in all the fields."
    })

    
    return {successToast, errorToast, infoToast}
}

export default useShowToast
