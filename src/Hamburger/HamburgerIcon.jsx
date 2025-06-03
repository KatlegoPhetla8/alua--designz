import { Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import {Link as RouterLink} from "react-router-dom"
import HamburgerMenu from './HamburgerMenu'

function HamburgerIcon({isVisible, bgColor}) {
  return (
    <Flex
    flexDir={{base:"row", md:"row", lg:"none"}}
    alignItems={"center"}
    justifyContent={"space-between"}
    display={{base:"flex", md:"flex", lg:"none"}}
    pt={"2rem"}
    pb={"2rem"}
    as={'header'}
    position={'fixed'}
    top={isVisible ? "0" : "-120px"}
    bg={bgColor}
    left={0}
    right={0}
    zIndex={1000}
    height={'80px'}
    transition={"all 0.6s ease-in-out"}
    px={'2rem'}
        >
          <Link
          focusRing={"none"}
          textDecor={"none"}
          as={RouterLink}
          to={"/"}
          color={"rgb(212, 172, 121)"}
          fontWeight={"semibold"}
          css={{
            "@media (max-width: 340px)": {
              fontSize: "16px",
            },
          }}
          fontSize={"18px"}>
            ALUA DESIGNZ
            </Link>
          <HamburgerMenu/>
        </Flex>
  )
}

export default HamburgerIcon
