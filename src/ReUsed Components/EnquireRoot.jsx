import { Button, FieldLabel, FieldRoot, Fieldset, For, Input, NativeSelectField, NativeSelectIndicator, NativeSelectRoot, Textarea, VStack } from '@chakra-ui/react'
import { input } from 'framer-motion/client';
import { useState } from 'react';
import useShowToast from '../hooks/useShowToast';
import useEnquire from '../hooks/useEnquire';


function EnquireRoot() {
  const {infoToast} = useShowToast();
  const {enquireSubmit, isLoading} = useEnquire()
  
  const [inputs, setInputs] = useState({
    fullName:"",
    email:"",
    companyName:"",
    serviceEnquire:"",
    contactNum:"",
    message:""
  });

  async function submit (e){
    e.preventDefault();

    const serviceEnquiry = Object.values(inputs);
    for (const value of serviceEnquiry){
      if (value === ""){
        infoToast();
        return;
      }
    };

    
    await enquireSubmit(inputs)
    setInputs({
    fullName:"",
    email:"",
    companyName:"",
    serviceEnquire:"",
    contactNum:"",
    message:""
    });
    }
  
    const [useServices, setUseServices ]= useState([
      "",
    'Cleaning Services',
    'Interior Design & Project Management',
    'Blind Sales & Installation',
    'Digital Services',
    'Tendering Administrative Support',
    'Catering Services',
    'Transportation Services',
    'Outsourcing Solutions',
    'Business Development & Marketing Services'
    ]);

  return (
    <>
      <Fieldset.Root
    mx={"auto"}
    py={"2rem"}
    px={"2rem"}
    size={"sm"}
    w={{base:"100%", md:"60%", lg:"60%"}}
    bgColor={"rgb(212, 172, 121)"}
    borderRadius={"2rem"}
        
        >
          <VStack
          pb={"1rem"}
          gap={"1rem"}
          >
            <Fieldset.Legend fontSize={{base:"24px", md:"26px" ,lg:"28px"}} color={"whiteAlpha.800"}>Enquire</Fieldset.Legend>
            <Fieldset.HelperText fontSize={{base:"16px", md:"18px",lg:"18px"}} color={"whiteAlpha.600"}>Please fill in the form</Fieldset.HelperText>
          </VStack>

          <form onSubmit={submit}>
          <Fieldset.Content
          alignItems={{base:"center", md:"center", lg:"center"}}
          >
            <FieldRoot
            alignItems={{base:"center", md:"center", lg:"center"}}
            pb={"1rem"}
            >
              <FieldLabel
              color={"whiteAlpha.800"}
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              >Name
              </FieldLabel>
              <Input 
              value={inputs.name}
              required
              w={{base:"100%",md:"80%",lg:"50%"}} 
              bgColor={"whiteAlpha.800"} 
              border={"none"} 
              _placeholder={{color:"rgb(212, 172, 121)"}}
              onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
              as={'input'}  
              type="text"
              name='name'
              placeholder='Name'/>
            </FieldRoot>

             <FieldRoot
             alignItems={{base:"center", md:"center", lg:"center"}}
            pb={"1rem"}
            >
              <FieldLabel
              color={"whiteAlpha.800"}
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              >Email
              </FieldLabel>
              <Input 
              value={inputs.email}
              required
              w={{base:"100%",md:"80%",lg:"50%"}} 
              bgColor={"whiteAlpha.800"} 
              border={"none"} 
              _placeholder={{color:"rgb(212, 172, 121)"}}
              onChange={(e)=> setInputs({...inputs, email: e.target.value})}
              as={'input'}  
              type="email"
              name='email'
              placeholder='Email'/>
            </FieldRoot>
    
            <FieldRoot
            alignItems={{base:"center", md:"center", lg:"center"}}
            pb={"1rem"}
            >
              <FieldLabel
              color={"whiteAlpha.800"}
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              >Company name (optional)
              </FieldLabel>
              <Input 
              value={inputs.companyName}
              required
              w={{base:"100%",md:"80%",lg:"50%"}} 
              bgColor={"whiteAlpha.800"} 
              border={"none"} 
              _placeholder={{color:"rgb(212, 172, 121)"}}
              onChange={(e)=> setInputs({...inputs, companyName: e.target.value})}
              as={'input'}  
              type='text'
              name='company name' 
              placeholder='Company name'/>
            </FieldRoot>
    
            <FieldRoot
            alignItems={{base:"center", md:"center", lg:"center"}}
            pb={"1rem"}
            >
              <FieldLabel
              color={"whiteAlpha.800"}
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              >Chooose service</FieldLabel>
              <NativeSelectRoot
              color={"rgb(212, 172, 121)"}
              bgColor={"whiteAlpha.800"}
              w={{base:"100%",md:"80%",lg:"50%"}} 
              >
                <NativeSelectField
                value={inputs.service}
                onChange={(e)=> setInputs({...inputs, serviceEnquire: e.target.value})}
                border={"none"} 
                name='choose services'>
                  <For each={useServices}>
                    {(service)=>(
                      <option style={{color:"rgb(212, 172, 121)", backgroundColor:"white"}} key={service} value={service}>
                        {service}
                      </option>
                    )}
                  </For>
                </NativeSelectField>
                <NativeSelectIndicator color={"rgb(212, 172, 121)"}/>
              </NativeSelectRoot>
            </FieldRoot>

            <FieldRoot
            alignItems={{base:"center", md:"center", lg:"center"}}
            pb={"1rem"}
            >
              <FieldLabel
              color={"whiteAlpha.800"}
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              >Contact number
              </FieldLabel>
              <Input 
              value={inputs.contactNum}
              required
              w={{base:"100%",md:"80%",lg:"50%"}}
              bgColor={"whiteAlpha.800"} 
              border={"none"} 
              _placeholder={{color:"rgb(212, 172, 121)"}}
              onChange={(e)=> setInputs({...inputs, contactNum: e.target.value})}
              as={'input'} 
              type="tel"
              name='contact' 
              placeholder='Contact number'/>
            </FieldRoot>
    
            <FieldRoot
            alignItems={{base:"center", md:"center", lg:"center"}}
            pb={"1rem"}
            >
              <FieldLabel
              color={"whiteAlpha.800"}
              fontSize={{base:"16px",md:"18px",lg:"20px"}}
              >Message</FieldLabel>
              <Textarea 
              value={inputs.message}
              required
              h={"20rem"}
              w={{base:"100%",md:"80%",lg:"50%"}} 
              bgColor={"whiteAlpha.800"} 
              border={"none"} 
              _placeholder={{color:"rgb(212, 172, 121)"}}
              onChange={(e)=> setInputs({...inputs, message: e.target.value})}
              as={"textarea"} 
              name='message' 
              placeholder='Message'/>
            </FieldRoot>
    
            <Button
            loading={isLoading}
            type='submit'
            fontSize={"15px"}
            color={"rgb(212, 172, 121)"}
            bgColor={"whiteAlpha.800"}
            w={{base:"100%",md:"80%",lg:"50%"}}
            _hover={{opacity:"0.7"}}
            >Send Enquiry
            </Button>
          </Fieldset.Content>
          </form>
        </Fieldset.Root>
    </>
    
  )
}

export default EnquireRoot