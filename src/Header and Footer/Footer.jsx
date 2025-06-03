import { Container, Flex, Heading, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Link as RouterLink} from 'react-router-dom'



function Footer() {
  return (
    <Flex 
    pb={"4rem"}
    alignItems={"normal"}
    justifyContent={"space-evenly"}
    >
      <VStack
      alignItems={"flex-start"}
      >
        <Heading
        fontSize={{base:"18px", md:"20px", lg:"22px"}}
        >
          Address <span><Icon boxSize={"24px"} as={IoLocationOutline}/></span>
        </Heading>
        <Text
        fontSize={{base:"14px", md:"16px", lg:"18px"}}
        textAlign={"left"}
        >
          Gauteng, South Africa
        </Text>
        <Text
        fontSize={{base:"14px", md:"16px", lg:"18px"}}
        textAlign={"left"}
        >
          Alua Designz
        </Text>
        <Text
        fontSize={{base:"14px", md:"16px", lg:"18px"}}
        >
          Design Street
        </Text>
        <Text
        fontSize={{base:"14px", md:"16px", lg:"18px"}}
        >
          0012
        </Text>
      </VStack>

      <VStack>
        <Heading
        fontSize={{base:"18px", md:"20px", lg:"22px"}}
        >
          Socials
        </Heading>
        <Flex
        gap={"1rem"}
        color={"rgb(212, 172, 121)"}
        >

                  <Link
                  as={RouterLink}
                  to={"https://www.instagram.com/"}
                  focusRing={"none"}
                  textDecor={"none"}
                  target='_blank'
                  >
                  <Icon color={"rgb(212, 172, 121)"} _hover={{cursor:"pointer"}} as={FaInstagram}/>
                  </Link>
          
                  <Link
                  as={RouterLink}
                  to={"https://web.facebook.com/"}
                  focusRing={"none"}
                  textDecor={"none"}
                  target='_blank'
                  >
                  <Icon color={"rgb(212, 172, 121)"}  _hover={{cursor:"pointer"}} as={FaFacebook}/>
                  </Link>
          
                  <Link
                  as={RouterLink}
                  to={"https://www.tiktok.com/"}
                  focusRing={"none"}
                  textDecor={"none"}
                  target='_blank'
                  >
                  <Icon color={"rgb(212, 172, 121)"} _hover={{cursor:"pointer"}} as={FaTiktok}/>
                  </Link>
          
                  <Link
                  as={RouterLink}
                  to={"https://www.linkedin.com/"}
                  focusRing={"none"}
                  textDecor={"none"}
                  target='_blank'
                  >
                <Icon color={"rgb(212, 172, 121)"} _hover={{cursor:"pointer"}} as={FaLinkedin}/>
                </Link>
        </Flex>
      </VStack>

    </Flex>
  )
}

export default Footer
