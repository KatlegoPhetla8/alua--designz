import React, { useState } from 'react'
import useShowToast from './useShowToast'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function useEnquire() {

    const {successToast, errorToast, infoToast} = useShowToast();
    const [isLoading, setIsLoading] = useState(false);

    async function enquireSubmit (inputs){
         const serviceEnquiry = Object.values(inputs);
   for (const value of serviceEnquiry){
    if (value === ""){
        infoToast();
        return
    }
   }
    // docRef id for each document sent
    const docRefId = `${inputs.email}: @ ${new Date().toISOString()}`
    setIsLoading(true);

    try{
        const docRef = await setDoc(doc(db, 'serviceEnquiry', docRefId),{
            fullName:inputs.fullName,
            email:inputs.email,
            companyName:inputs.companyName,
            serviceEnquire:inputs.serviceEnquire,
            contactNum:inputs.contactNum,
            message:inputs.message,
            createdAt: new Date().toDateString()
        })
        successToast();
        return docRef
    } catch(error){
        console.error(error);
        errorToast()
    } finally{
        setIsLoading(false)
    }
    }
    return {enquireSubmit, isLoading}
}

export default useEnquire
