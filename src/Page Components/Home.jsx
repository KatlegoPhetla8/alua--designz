import { Box, Container, Flex, Heading, HStack, Icon, Image, Link, Skeleton, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react';
import {Link as RouterLink} from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { FaRegThumbsUp } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import LoadSpinner from '../ReUsed Components/LoadSpinner';

 const MotionBox = motion.create(Box) // Always declare outside of functions and function components. Or at the top.

function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  // Image URLs

  useEffect(()=>{
      const img = new window.Image();
      img.src = '/header image.png';
      img.onload = () => setIsLoaded(true)
    
  },[]);


  const scrollImages = [
      'Service Images/Cleaning.png',
      'Service Images/Blinds.png',
      'Service Images/Interior.png',
      'Service Images/Admin.png',
      'Service Images/Catering.png'
    ];

    // Motion controll to manually start and reset
    const controls = useAnimation();

    const imageArray = [...scrollImages, ...scrollImages];

      const imageWidth = useBreakpointValue({ // Width of images on screen change
      base:200,
      sm:300,
      md:360,
      lg:400,
      xl:400
    });

    // useMemo recalculates the totalWidth to trigger the animation update (Memoized)
    const totalWidth = useMemo(()=>{
      return imageWidth ? imageWidth * scrollImages.length : 0;
    }, [imageWidth]);

    useEffect(()=>{
      if(!totalWidth) return;

      let isActive = true; // Cancels loop when screen size changes
      const loop = async () =>{
        while (isActive){
          //Animate carousel to the left
          await controls.start({
            x: -totalWidth, // move left
            transition:{
              duration:12, // total duration seconds
              ease: "linear" // constant speed
            }
          })
          controls.set({x:0}) // resets to 0 without animation
        }
      }
      loop();

      // Cleanup function cancels loop when dependencies change
      return ()=>{
        isActive = false;
      };

    },[controls ,totalWidth])

  return (
  <Box
  mb={"8rem"}
  >
    {isLoaded ?
    <Box
      position={'relative'}
      height={{base:"100vh",md:"100vh",lg:"100vh"}}
      w={"100%"}
      bgImage={`url('/header image.png')`}
      transition={"filter 0.3s ease"}
      bgSize={"cover"}
      backgroundPosition={"center"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={{base:"center", md:"center", lg:"start"}}
      pt={{base:"0",md:"40px",lg:"60px"}}
      >

    <Heading
    textShadow={"2px 2px 2px rgb(212, 172, 121)"}
    as={'h1'}
    ml={{base:"1rem", md:"1rem", lg:"2rem"}}
    textAlign={{base:"center", md:"center", lg:"left"}}
    fontWeight={"600"}
    w={{base:"90%",md:"70%",lg:"70%"}}
    fontSize={{base:"40px",md:"55px",lg:"70px"}}
    css={{
    "@media (max-width: 350px)": {
      fontSize: "30px",
    },
  }}
    lineHeight={{base:"40px",md:"50px",lg:"80px"}}
    color={"whiteAlpha.800"}>
    Your Partner for Events, Design & Business Support. 
    </Heading>
    <Box 
      id="hero-sentinel" 
      position="absolute" 
      bottom="0" 
      width="100%" 
      height="1px" 
      />
    </Box> : <LoadSpinner/>}
      

    <Flex
    pt={"8rem"}
    alignItems={"center"}
    justifyContent={"center"}
    >
      <Heading
      as={"h2"}
      fontWeight={"medium"}
      lineHeight={{base:"30px",md:"30px",lg:"36px"}}
      fontSize={{base:"18px", sm:"20px", md:"26px",lg:"30px"}}
      textAlign={{base:"center",md:"center",lg:"left"}}
      w={{base:"auto",sm:"80%", md:"70%",lg:"60%"}}
      mx={"auto"}
     >
      At Alua Designz, we offer a wide range of professional services including cleaning, 
      interior design, catering, 
      project management, 
      and more — tailored to meet your business and event needs.
    </Heading>
    </Flex>
     
     <Box
     pt={{base:"8rem",md:"8rem",lg:"10rem"}}>
      <Heading
      as={"h3"}
      textAlign={"center"}
      fontSize={{base:"34px",md:"38px",lg:"40px"}}
      css={{
      "@media (max-width: 360px)": {
        fontSize: "30px",
      },
    }}
      pb={{base:"6rem",md:"8rem",lg:"8rem"}}
      >
        SOME OF OUR SERVICES
      </Heading>

      {/*Moving Catalog Images */}
      <Box
      overflow={"hidden"}
      w={"100%"}
      h={`${imageWidth}px`}
      >
        <MotionBox
        display={"flex"}
        animate={controls}
        >
          {/* Render each image in the array */}
          {imageArray.map((src,i)=>(
            <Box
            key={i}
            flex="0 0 auto" // ensures images dont shrink
            boxSize={`${imageWidth}px`}
            p={"2"}
            >
              {isLoaded ? <Image 
              loading={"lazy"}
              boxShadow={"md"}
              src={src}
              boxSize={"100%"}
              objectFit={"cover"}
              borderRadius={"md"}
              /> : <Spinner color={"rgb(212, 172, 121)"} size={"lg"}/>}
              
            </Box>
          ))}
        </MotionBox>
      </Box>

      <Flex
      _hover={{opacity:"0.6", cursor:"pointer"}}
      alignItems={"center"}
      justifyContent={"center"}
      pt={"2rem"}>
        <Link
        color={"rgb(212, 172, 121)"}
        as={RouterLink}
        to={"/services"}
        focusRing={"none"}
        textDecor={"none"}>
        <Text
        fontSize={{base:"18px",sm:"20px", md:"22px",lg:"22px"}}
        textAlign={"center"}>
        Find out more
      </Text>
      <Icon 
      as={GoArrowRight} 
      boxSize={8} 
      color={"rgb(212, 172, 121)"}/>
      </Link>
      </Flex>
      
      {/*Testimonial Section */}
      <Flex
      flexDir={{base:"column", md:"column", lg:"row"}}
      boxShadow={"3px 2px 3px 3px rgb(212, 172, 121)"}
      mt={"8rem"}
      pt={"2rem"}
      pb={"4rem"}
      justifyContent={"space-evenly"}
      color="rgba(255, 255, 255, 0.8)"
      bgColor={"rgb(212, 172, 121)"}
      
      >
        

        <Flex
        textAlign={{base:"center", md:"center",lg:"left"}}
        gap={"4rem"}
        pt={"4rem"}
        flexDirection={"column"}
        >

          {/*Heading for small screens */}
        <Heading
        display={{base:"contents", md:"contents",lg:"none"}}
        textAlign={"center"}
        fontSize={{base:"26px", sm:"26px", md:"26px",lg:"26px"}}
          >
            Some of our Clients & Testimonials
          </Heading>

          <Box
          px={{base:"none", md:"none", lg:"1rem"}}>
            <Heading
            as={'h3'}
            fontSize={{base:"20px",md:"26px",lg:"26px"}}
            >
              DMK VIP Mobile Toilets:
            </Heading>
            <Text
            fontSize={{base:"18px",md:"20px",lg:"20px"}}
            >
            Cleaning services at Department of Roads and Maintenance
          </Text>
          </Box>
          
          <Box
          px={{base:"none", md:"none", lg:"1rem"}}
          >
            <Heading
            fontSize={{base:"20px",md:"26px",lg:"26px"}}
            >
              SIDNEY:
            </Heading>
            <Text
            fontSize={{base:"18px",md:"20px",lg:"20px"}}
            >
              Satisfied with fauxwood blind installation
          </Text>
          </Box>
        </Flex>
          
          {/*HEADING AND ICON TESTIMONIAL */}
        <Flex
        pt={{base:"4rem", md:"0",lg:"0"}}
        gap={"4rem"}
        textAlign={"center"}
        alignItems={"center"}
        flexDir={"column"}>
          <Heading
          display={{base:"none", md:"none",lg:"contents"}}
          textAlign={"center"}
          fontSize={{base:"20px",md:"26px",lg:"26px"}}
          >
            Some of our Clients & Testimonials
          </Heading>
          
            <Icon 
            mt={{base:"none", md:"2rem", lg:"none"}}
            mr={{base:"0rem", md:"2rem", lg:"2rem"}}
            boxSize={"80px"}
            color={"rgba(255, 255, 255, 0.8)"}
            as={FaRegThumbsUp}/>
        </Flex>

         <Flex
         textAlign={{base:"center", md:"center",lg:"left"}}
         gap={"4rem"}
         flexDir={"column"}
         pt={"4rem"}
         >
         <Box
         
         
         >
            <Heading
            fontSize={{base:"20px",md:"26px",lg:"26px"}}
            >
              Mabala Noise Event 2024:
            </Heading>
            <Text
            fontSize={{base:"18px",md:"20px",lg:"20px"}}
            >
            Event cleaning and staff provision

          </Text>
          </Box>

          <Box>
            <Heading
            fontSize={{base:"20px",md:"26px",lg:"26px"}}
            >
              Reginald Nkabinde & Thabo Makama:
            </Heading>
            <Text
            fontSize={{base:"18px",md:"20px",lg:"20px"}}
            >
            Office redesign and post-construction cleaning
          </Text>
          </Box>
        </Flex>

      </Flex>
      
     </Box>
 </Box>
  )
}

export default Home
