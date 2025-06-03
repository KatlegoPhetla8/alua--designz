import { Button, Container, FieldLabel, FieldRoot, Fieldset, Flex, Heading, HStack, Icon, Input, Link, Stack, Text, Textarea, Toaster, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { BiPhoneCall } from "react-icons/bi";
import { sub } from 'framer-motion/client';
import useShowToast from '../hooks/useShowToast';
import useContact from '../hooks/useContact';
import {Link as RouterLink} from 'react-router-dom'


function Contact() {

  const {infoToast} = useShowToast();
  const {submitContact, isLoading} = useContact();

  const [inputs, setInputs] = useState({
    name:"",
    email: "",
    subject:"",
    message:""
  });
 
  
  // Function executes on submit
  async function submit (e){
    e.preventDefault();

    const contactValues = Object.values(inputs);
    for (const value of contactValues){
      if (value === ""){
        infoToast();
        return;
      }
    };
    
    await submitContact(inputs)
    setInputs({
    name:"",
    email: "",
    subject:"",
    message:""
    })
  };

  return (
     <Container
    maxW={"auto"}
    pt={"10rem"}
    mb={"8rem"}
    >
    
    <Heading
    as={"h1"}
    mx={"auto"}
    textAlign={"center"}
    fontSize={{base:"36px",md:"40px",lg:"45px"}}
    pb={"8rem"}
    >
    Contact
    </Heading>
    
    <Fieldset.Root
    py={"2rem"}
    px={{base:"0rem", md:"2rem", lg:"2rem"}}
    size={"sm"}
    maxW={"auto"}
    bgColor={"rgb(212, 172, 121)"}
    borderRadius={"2rem"}
    
    >
      <VStack
      pb={"1rem"}
      gap={"1rem"}
      >
        <Fieldset.Legend 
        fontSize={{base:"24px", md:"26px" ,lg:"28px"}} 
        color={"whiteAlpha.800"}>
          Contact us
          </Fieldset.Legend>
        <Fieldset.HelperText 
        fontSize={{base:"16px", md:"18px",lg:"18px"}} 
        color={"whiteAlpha.600"}>
          Please fill in the form
          </Fieldset.HelperText>
      </VStack>

    <form onSubmit={submit}>
      <Flex
      alignItems={{base:"center", md:"center", lg:"start"}}
      flexDir={{base:"column", md:"column", lg:"row"}}
      justifyContent={"space-evenly"}>

        
      <Fieldset.Content
      alignItems={{base:"center", md:"center", lg:"start"}}
      w={"80%"}>
        
        <FieldRoot
        alignItems={{base:"center", md:"center", lg:"start"}}
        pb={"1rem"}>
          <FieldLabel
          color={"whiteAlpha.800"}
          fontSize={{base:"16px",md:"18px",lg:"20px"}}
          >Name
          </FieldLabel>
          <Input 
          required
          w={{base:"100%",md:"80%",lg:"40%"}}  
          bgColor={"whiteAlpha.800"} 
          border={"none"} 
          _placeholder={{color:"rgb(212, 172, 121)"}}
          onChange={(e)=> setInputs({...inputs, name: e.target.value})}
          as={'input'}  
          type="text"
          name='name'
          value={inputs.name}
          placeholder='Name'/>
        </FieldRoot>

        <FieldRoot
        alignItems={{base:"center", md:"center", lg:"start"}}
        pb={"1rem"}
        >
          <FieldLabel
          color={"whiteAlpha.800"}
          fontSize={{base:"16px",md:"18px",lg:"20px"}}
          >Email</FieldLabel>
          <Input 
          required
          type="email"
          w={{base:"100%",md:"80%",lg:"40%"}} 
          bgColor={"whiteAlpha.800"} 
          border={"none"} 
          _placeholder={{color:"rgb(212, 172, 121)"}}
          onChange={(e)=> setInputs({...inputs, email: e.target.value})}
          value={inputs.email}
          as={'input'}  
          name='email' 
          placeholder='Email'/>
        </FieldRoot>

        <FieldRoot
        alignItems={{base:"center", md:"center", lg:"start"}}
        pb={"1rem"}
        >
          <FieldLabel
          color={"whiteAlpha.800"}
          fontSize={{base:"16px",md:"18px",lg:"20px"}}
          >Subject</FieldLabel>
          <Input 
          required
          type='text'
          w={{base:"100%",md:"80%",lg:"40%"}} 
          bgColor={"whiteAlpha.800"} 
          border={"none"} 
          _placeholder={{color:"rgb(212, 172, 121)"}}
          onChange={(e)=> setInputs({...inputs, subject: e.target.value})}
          value={inputs.subject}
          as={'input'} 
          name='subject' 
          placeholder='Subject'/>
        </FieldRoot>

        <FieldRoot
        alignItems={{base:"center", md:"center", lg:"start"}}
        pb={"1rem"}
        >
          <FieldLabel
          color={"whiteAlpha.800"}
          fontSize={{base:"16px",md:"18px",lg:"20px"}}
          >Message</FieldLabel>
          <Textarea 
          required
          h={"20rem"}
          w={{base:"100%",md:"80%",lg:"40%"}}  
          bgColor={"whiteAlpha.800"} 
          border={"none"} 
          _placeholder={{color:"rgb(212, 172, 121)"}}
          onChange={(e)=> setInputs({...inputs, message: e.target.value})}
          value={inputs.message}
          as={"textarea"} 
          name='message' 
          placeholder='Message'/>
        </FieldRoot>

        <Button
        loading={isLoading}
        type='submit'
        fontSize={{base:"16px",md:"18px",lg:"20px"}}
        color={"rgb(212, 172, 121)"}
        bgColor={"whiteAlpha.800"}
        width={{base:"100%", md:"80%", lg:"40%"}}
        _hover={{opacity:"0.7"}}
        >Send Message
        </Button>
      </Fieldset.Content>
     

       <Stack
       pt={{base:"2rem", md:"2rem", lg:"none"}}
       display={{base:"flex", md:"flex", lg:"flex"}}
       justifyContent={{base:"space-evenly", md:"space-evenly", lg:"flex-start"}}
       flexDir={{base:"row", md:"row", lg:"column"}}
       gap={{base:"20px", md:"2rem",lg:"2rem"}}
       >
        <Link
        as={RouterLink}
        to={"https://www.instagram.com/"}
        focusRing={"none"}
        textDecor={"none"}
        target='_blank'
        isExternal>
        <Icon boxSize={{base:"2rem", sm:"4rem", md:"5rem", lg:"5rem"}} color={"whiteAlpha.800"} _hover={{cursor:"pointer"}} as={FaInstagram}/>
        </Link>

        <Link
        as={RouterLink}
        to={"https://web.facebook.com/"}
        focusRing={"none"}
        textDecor={"none"}
        target='_blank'
        >
      <Icon boxSize={{base:"2rem", sm:"4rem", md:"5rem", lg:"5rem"}} color={"whiteAlpha.800"} _hover={{cursor:"pointer"}} as={FaFacebook}/>
        </Link>

        <Link
        as={RouterLink}
        to={"https://www.tiktok.com/"}
        focusRing={"none"}
        textDecor={"none"}
        target='_blank'
        >
      <Icon boxSize={{base:"2rem", sm:"4rem", md:"5rem", lg:"5rem"}} color={"whiteAlpha.800"} _hover={{cursor:"pointer"}} as={FaTiktok}/>
        </Link>

        <Link
        as={RouterLink}
        to={"https://www.linkedin.com/"}
        focusRing={"none"}
        textDecor={"none"}
        target='_blank'
        >
      <Icon boxSize={{base:"2rem", sm:"4rem", md:"5rem", lg:"5rem"}} color={"whiteAlpha.800"} _hover={{cursor:"pointer"}} as={FaLinkedin}/>
        </Link>

        <Link
        href='tel:+27601098414'
        isExternal
        focusRing={"none"}
        textDecor={"none"}
        >
      <Icon href='tel:+27601098414' boxSize={{base:"2rem", sm:"4rem", md:"5rem", lg:"5rem"}} color={"whiteAlpha.800"} _hover={{cursor:"pointer"}} as={BiPhoneCall} />     
        </Link>     
    </Stack>
    </Flex>
    </form>
    </Fieldset.Root>
    
    </Container>
  )
}

export default Contact
