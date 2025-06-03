import React, { useState } from 'react'
import useShowToast from './useShowToast'
import { addDoc , collection, doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase'

function useContact() {
 const {successToast, errorToast, infoToast} = useShowToast();
 const [isLoading, setIsLoading] = useState(false);

 async function submitContact (inputs){
   const contactValues = Object.values(inputs);
   for (const value of contactValues){
    if (value === ""){
        infoToast();
        return
    }
   }

     // docRef id for each document sent
    const docRefId = `${inputs.email}: @ ${new Date().toISOString()}`;
    setIsLoading(true);

    try{
        const docRef = await setDoc(doc(db, 'contact', docRefId),{
            fullName: inputs.name,
            email: inputs.email,
            subject: inputs.subject,
            message: inputs.message,
            createdAt: new Date().toDateString()
        })
        successToast();
        return docRef

    } catch(error){
        console.error(error)
        errorToast();

    } finally{
        setIsLoading(false);
    }
 }
 return {submitContact, isLoading}
}

export default useContact
