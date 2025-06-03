import React, { useState } from 'react'

function useService() {
    const [currService, setCurrService] = useState('');

    const [service, setService] = useState({
             "cleaning-service": "Cleaning Service",
             "interior-design-&-project-management": "Interior Design & Project Management",
             "blind-sales-&-installation":"Blind Sales & Installation",
             "digital-services":"Digital Services",
             "tendering-administrative-support":"Tendering Administrative Support",
             "catering-services":"Catering Services",
             "transportation-services":"Transportation Services",
             "outsourcing-solutions":"Outsourcing Solutions",
             "business-development-&-marketing-services":"Business Development & Marketing Services"
         });
         //Function that checks the classList of the button that was clicked and will be displayed on Service picked
        function servicePick(classList){
            for (let ser in service){
                if (ser === classList){
                    console.log(service[ser])
                    setCurrService(service[ser]);
                }
            }
        };
    return {servicePick, setCurrService, currService }   
}

export default useService
