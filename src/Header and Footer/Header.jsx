import { Button, Container, Flex, Link } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import EnquireNow from '../Page Components/EnquireNow'
import { GoColumns } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import HamburgerIcon from '../Hamburger/HamburgerIcon';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(0);
  
 

  const location = useLocation();
  const isHome = location.pathname === "/";

  // FUNCTION FOR SCROLL HEADER(UP AND DOWN)
   function handleScroll (){
    // Whether we are scrolling up or down
    const currentScrollY = window.scrollY;
    
    setIsScrolled(currentScrollY > 0)

    if (currentScrollY > lastScrollY){
      //scrolling down (Hide Header)
      setIsVisible(false)
    } else{
      //scrolling up (Show Header)
      setIsVisible(true)
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const bgColor = isHome && !isScrolled ? "trasparent" : "whiteAlpha.800"

  return (  
    <>
  {/**Hamburger Menu for base and medium */}
  <HamburgerIcon isVisible={isVisible} bgColor={bgColor}/>
    
    <Flex
    display={{base:"none", md:"none", lg:"flex"}}
    pt={"2rem"}
    pb={"2rem"}
    as={'header'}
    position={'fixed'}
    top={isVisible ? "0" : "-120px"}
    bg={bgColor}
    left={0}
    right={0}
    alignItems={"center"}
    justifyContent={"space-between"}
    zIndex={1000}
    height={'80px'}
    transition={"all 0.6s ease-in-out"}
    px={'2rem'}
    >
        <Link
        display={{base:"none", md:"none", lg:"flex"}}
        focusRing={"none"}
        textDecor={"none"}
        as={RouterLink}
        to={"/"}
        color={"rgb(212, 172, 121)"}
        fontWeight={"semibold"}
        fontSize={"24px"}
        >
            ALUA DESIGNZ
        </Link>

        <Link
        display={{base:"none", md:"none", lg:"flex"}}
        position={"relative"}
        focusRing={"none"}
        textDecor={"none"}
        fontSize={"20px"}
         as={RouterLink}
         to={"/services"}
        color={"rgb(212, 172, 121)"}
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "0%",
          height: "2px",
          bg: "rgb(212, 172, 121)",
          transition: "width 0.3s ease",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
        }}
        >
        OUR SERVICES
        </Link>

        <Link
        display={{base:"none", md:"none", lg:"flex"}}
        position={"relative"}
        focusRing={"none"}
        textDecor={"none"}
        fontSize={"20px"}
        as={RouterLink}
        to={"/about"}
        color={"rgb(212, 172, 121)"}
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "0%",
          height: "2px",
          bg: "rgb(212, 172, 121)",
          transition: "width 0.3s ease",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
        }}
        >
        ABOUT US
        </Link>

        <Link
        display={{base:"none", md:"none", lg:"flex"}}
        position={"relative"}
        focusRing={"none"}
        textDecor={"none"}
        fontSize={"20px"}
        as={RouterLink}
        to={"/contact"}
        color={"rgb(212, 172, 121)"}
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "0%",
          height: "2px",
          bg: "rgb(212, 172, 121)",
          transition: "width 0.9s ease",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
      }}
      >
        CONTACT
        </Link>

        <Link
        display={{base:"none", md:"none", lg:"flex"}}
        focusRing={"none"}
        textDecor={"none"}
        fontSize={"20px"}
        as={RouterLink}
        to={"/enquire"}
        >
        <Button
        display={{base:"none", md:"none", lg:"flex"}}
        fontSize={"16px"}
        _hover={!isHome ? 
          {color:"rgb(212, 172, 121)", bgColor:"rgba(255, 255, 255, 0.8)", borderWidth:"2px", borderColor:"rgb(212, 172, 121)"} 
          : {color:"rgb(212, 172, 121)", bgColor:"rgba(255, 255, 255, 0.8)"}}
          color={"whiteAlpha.700"}
          bgColor={"rgb(212, 172, 121)"}
          w={"10rem"}
          h={"4rem"}
          borderRadius={"2rem"}
          >
        Enquire Now
        </Button>
        </Link>
      </Flex>
      </>
  )
}

export default Header
