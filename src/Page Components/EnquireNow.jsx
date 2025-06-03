import {  Container,  Heading } from '@chakra-ui/react'
import EnquireRoot from '../ReUsed Components/EnquireRoot';

function EnquireNow() {

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
    Enquire
    </Heading>

    <EnquireRoot/>
    </Container>
  )
}

export default EnquireNow
