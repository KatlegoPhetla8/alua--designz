import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function AboutUs() {
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
    pb={"8rem"}>
      About Us
    </Heading>

    <Flex>
      <Box
      pb={"6rem"}
      w={{base:"80%",md:"50%",lg:"50%"}}
    >
      <Heading
      pb={"1rem"} 
      fontSize={{base:"26px",md:"28px",lg:"30px"}} 
      as={"h2"}>
        Alua Designz
      </Heading>
      <Text 
      fontSize={{base:"16px",md:"20px",lg:"20px"}} 
      as={"text"}>
        Alua Designz is a dynamic and innovative company based in Gauteng, South Africa. 
        Founded in 2020, the company offers a wide range of services including event and office cleaning, 
        interior design, project management, blind installations, catering, 
        transport services, digital invitations, tendering administrative support, 
        and business development and marketing.
      </Text>
    </Box>
    </Flex>
    

      <Flex
      justifyContent={"right"}>
        <Box
        w={{base:"80%",md:"50%",lg:"50%"}}
        pb={"6rem"}
       >
      <Heading 
      pb={"1rem"} 
      fontSize={{base:"26px",md:"28px",lg:"30px"}}  
      as={"h2"}>
        Vision Statement
      </Heading>
      <Text 
      fontSize={{base:"16px",md:"20px",lg:"20px"}} 
      as={"text"}>
        To be South Africa’s leading one-stop solution for premium cleaning, design, marketing, and outsourcing services, 
        trusted for our reliability, creativity, and dedication to customer satisfaction.
      </Text>
      </Box>
      </Flex>
       
      <Flex>
      <Box 
      pb={"6rem"} 
      w={{base:"80%",md:"50%",lg:"50%"}}>
      <Heading 
      pb={"1rem"} 
      fontSize={{base:"26px",md:"28px",lg:"30px"}}  
      as={"h2"}>
        Mission Statement
      </Heading>
      <Text 
      fontSize={{base:"16px",md:"20px",lg:"20px"}} 
      as={"text"}>
        To provide exceptional cleaning, design, business development, and support services tailored to meet the needs of private clients, 
        corporates, and government entities through affordable, high-quality, and timely solutions.
      </Text>
      </Box>
      </Flex>
     
   
  </Container>
  )
}

export default AboutUs
