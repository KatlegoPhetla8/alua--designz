import { Box, Button, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, Container, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import PopUpDialog from '../ReUsed Components/PopUpDialog';
import LoadSpinner from '../ReUsed Components/LoadSpinner';

function OurServices() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const img = new window.Image();
    img.src = "/Service Page/cleaning.png"
    img.onload = () =>setIsLoaded(true)
  
  },[]);

  return (
    <Container
    maxW={"auto"}
    pt={"10rem"}
    mb={"8rem"}
    >
      {isLoaded ?  
      <>
      <Heading
    as={"h1"}
    mx={"auto"}
    textAlign={"center"}
    fontSize={{base:"36px",md:"40px",lg:"45px"}}
    pb={"8rem"}
    >
    Our Services
    </Heading>
    
    {/*Cleaning Services */}  
    <CollapsibleRoot 
    
     pb={"4rem"} 
     unmountOnExit>
    <CollapsibleTrigger 
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    
    bgImage="url('Service Page/cleaning.png')" >
    Cleaning Services
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"42rem", md:"35rem", lg:"30rem"}} 
    css={{
      "@media (max-width: 350px)":{
        height:"70rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/cleaning.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:'20px'}}>&bull; Event Cleaning </span>
        – Comprehensive pre- and post-event cleaning for weddings, parties, and corporate functions, ensuring venues are spotless and ready for use.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Office & Residential Cleaning </span>
        – Regular or once-off deep cleaning services for homes and workplaces, tailored to suit your schedule and hygiene needs.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Weekly Dustbin Pressure Cleaning </span>
        – Affordable, high-pressure bin cleaning at just R50 per bin, helping maintain a sanitary and odor-free environment.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Move-In / Move-Out Cleaning </span>
        – Thorough cleaning services for tenants, landlords, or agents preparing properties for occupation or handover.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Customized Cleaning Contracts </span>
        – Flexible service plans available for daily, weekly, or monthly cleaning based on client needs and budget.
        </Text>

        <PopUpDialog classList={"cleaning-service"}/>
      
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

    {/*Interior Design & Project Management*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/interior.png')" >
    Interior Design & Project Management
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem",sm:"38rem", md:"40rem", lg:"30rem"}}  
    css={{
      "@media (max-width: 350px)":{
        height:"70rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/interior.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Interior Space Planning & Design Concepts </span>
        – Tailored layout solutions and creative design ideas that enhance functionality, style, and flow for residential, commercial, or office spaces.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; On-Site Project Management </span>
        – Hands-on coordination and supervision of renovations, refurbishments, or redesigns to ensure quality workmanship and timely delivery.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Office & Commercial Space Makeovers </span>
        – Modern, efficient, and brand-aligned transformations for workspaces that boost productivity and professionalism.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Color & Material Consultation </span>
         – Expert advice on selecting color schemes, textures, and materials that create cohesive, inspiring environments.
        </Text>

        <PopUpDialog classList={"interior-design-&-project-management"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

    {/*Blind Sales & Installation*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/blinds.png')" >
    Blind Sales & Installation
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"36rem", md:"40rem", lg:"30rem"}}  
    css={{
      "@media (max-width: 350px)":{
        height:"60rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/blinds.png')">
    <Box>
       <Text
        px={"1rem"}
        pt={"1rem"}
        fontSize={{base:"16px",md:"16px", lg:"18px"}}
       >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Fauxwood Blinds </span>
         – Durable and stylish blinds that mimic real wood, ideal for moisture-prone areas like kitchens and bathrooms.
        </Text>

       <Text
        px={"1rem"}
        pt={"1rem"}
        fontSize={{base:"16px",md:"16px", lg:"18px"}}
       >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Zebra Blinds </span>
         – Modern dual-layer blinds that allow for smooth transition between light filtering and privacy, perfect for contemporary interiors.
        </Text>

       <Text
        px={"1rem"}
        pt={"1rem"}
        fontSize={{base:"16px",md:"16px", lg:"18px"}}
       >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Custom Orders </span>
         – Made-to-measure blinds tailored to your exact size, color, and material preferences for a perfect fit in any space.
        </Text>

       <Text
        px={"1rem"}
        pt={"1rem"}
        fontSize={{base:"16px",md:"16px", lg:"18px"}}
       >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Professional Installation </span>
          – Expert fitting services ensure your blinds are securely and neatly installed with precision and care.
        </Text>

        <PopUpDialog classList={"blind-sales-&-installation"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

     {/*Digital Services*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/digital.png')" >
    Digital Services
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"36rem", md:"40rem", lg:"30rem"}} 
    css={{
      "@media (max-width: 350px)":{
        height:"60rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/digital.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Custom Digital Invitations </span>
          – Beautifully designed e-invites for all event types, including weddings, birthdays, baby showers, graduations, and corporate events.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Branded Corporate Event Invites </span>
          – Professional invitation templates tailored for business launches, conferences, or promotional events.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Custom Design Packages </span>
          – Combine digital invitations with matching digital programs, menus, and thank-you cards for a cohesive event presentation.
        </Text>

      <PopUpDialog classList={"digital-services"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

    {/*Tendering Administrative Support*/}
    <CollapsibleRoot px={"2px"} pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/admin.png')" >
    Tendering Administrative Support
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"40rem", md:"40rem", lg:"30rem"}} 
    css={{
      "@media (max-width: 350px)":{
        height:"60rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/admin.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={"18px"}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Assistance with Government RFQs </span>
          – Expert guidance in responding to Requests for Quotations (RFQs) from government departments, ensuring compliance and professionalism.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Administrative Support for Tenders & Bids </span>
          – End-to-end assistance in preparing tender documents, including formatting, compiling required forms, and ensuring deadlines are met.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Compliance Checks & Due Diligence </span>
           – Verification of all required documentation such as B-BBEE certificates, tax clearance, CSD registration, etc.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Guidance for SMMEs </span>
           – Tailored support for small businesses new to the tendering process, helping them build confidence and capacity to compete.
        </Text>

      <PopUpDialog classList={"tendering-administrative-support"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

     {/*Catering Services*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/catering.png')" >
    Catering Services
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"36rem", md:"40rem", lg:"30rem"}} 
    css={{
      "@media (max-width: 350px)":{
        height:"60rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/catering.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Event Catering & Meal Preparation </span>
          – Customizable catering packages for weddings, birthdays, corporate functions, and private gatherings.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Custom Menu Design </span>
           – Menus tailored to client preferences, dietary requirements, and event themes—whether traditional, modern, or fusion cuisine.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; On-Site Catering & Setup </span>
            – Full-service catering with staff, equipment, and elegant setups to ensure a smooth dining experience.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Affordable Packages for All Budgets </span>
           – Scalable solutions that offer quality food and presentation without compromising on cost.
        </Text>

      <PopUpDialog classList={"catering-services"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

    {/*Transportation Services*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/transport.png')" >
    Transportation Services
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"36rem", md:"40rem", lg:"30rem"}}  
    css={{
      "@media (max-width: 350px)":{
        height:"60rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/transport.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Staff & Client Transport </span>
          – Reliable and comfortable transport solutions for event attendees, staff members, and corporate clients.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Event Shuttle Services </span>
          – Coordinated group transport for weddings, conferences, parties, and other special occasions.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Service Delivery Logistics </span>
          – Efficient transport for delivering equipment, supplies, or catering to event venues and business locations.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Experienced & Professional Drivers </span>
          – Skilled drivers committed to safety, professionalism, and excellent customer service.
        </Text>

      <PopUpDialog classList={"transportation-services"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

    {/*Outsourcing Solutions*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/outsourcing.png')" >
    Outsourcing Solutions
    </CollapsibleTrigger>

    <CollapsibleContent 
    color={"whiteAlpha.800"}
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    h={{base:"55rem", sm:"36rem", md:"40rem", lg:"30rem"}}
     css={{
      "@media (max-width: 350px)":{
        height:"60rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/outsourcing.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Staff Provision for Businesses & Events </span>
          – Supplying skilled, reliable personnel tailored to meet the staffing needs of various industries and event types.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Flexible Staffing Solutions </span>
          – Short-term, long-term, or project-based staffing options designed to suit client requirements and budgets.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Quality Assurance & Training </span>
          – Ensuring all outsourced staff meet professional standards and are adequately trained for their roles.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold",fontSize:"20px"}}>&bull; Customized Outsourcing Packages </span>
          – Tailored services that align with client business goals, project demands, and operational timelines.
        </Text>

      <PopUpDialog classList={"outsourcing-solutions"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot>

    {/*Business Development & Marketing Services*/}
    <CollapsibleRoot pb={"4rem"} unmountOnExit>
    <CollapsibleTrigger 
    boxShadow={"md"}
    fontWeight={"semibold"}
    fontSize={{base:"24px",md:"26px", lg:"28px"}}
    css={{
      "@media (max-width: 350px)":{
        fontSize:"20px"
      }
    }}
    color={"whiteAlpha.800"}
    borderRadius={"5px"}
    _hover={{cursor:"pointer"}} 
    w={"100%"} 
    h={"5rem"} 
    bgSize={"cover"} 
    bgImage="url('Service Page/business.png')" >
    Business Development & Marketing Services
    </CollapsibleTrigger>

    <CollapsibleContent 
    animationDuration={"slowest"}
    animationStyle={"slide-fade-in"}
    backgroundPosition={"center"}
    boxShadow={"md"}
    borderRadius={"5px"}
    color={"whiteAlpha.800"}
    h={{base:"57rem", sm:"44rem", md:"40rem", lg:"30rem"}}  
    css={{
      "@media (max-width: 350px)":{
        height:"68rem"
      }
    }}
    bgSize={"cover"} 
    bgImage="url('Service Page/business.png')">
    <Box>
      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Strategic Business Support </span>
          – Assisting startups and small businesses with growth strategies, planning, and execution to build strong foundations and long-term success.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Social Media Management & Content Creation </span>
          – Managing online presence through engaging posts, reels, and stories designed to grow audiences and boost brand visibility.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Branding & Identity Design </span>
          – Developing logos, brand guidelines, and visual content that reflect a company’s unique values and resonate with target markets.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Promotional Campaigns </span>
          – Crafting creative marketing campaigns and materials that drive awareness, attract leads, and convert customers.
        </Text>

      <Text
      px={"1rem"}
      pt={"1rem"}
      fontSize={{base:"16px",md:"16px", lg:"18px"}}
      >
        <span style={{fontWeight:"bold", fontSize:"20px"}}>&bull; Digital Marketing Solutions </span>
          – Providing email marketing, basic SEO support, and ad campaign management to improve online reach and performance.
        </Text>

      <PopUpDialog classList={"business-development-&-marketing-services"}/>
    </Box>
    </CollapsibleContent>
    </CollapsibleRoot> 
    </>
      : 
      <LoadSpinner/>
      
      
      }
   
    
    </Container>
  )
}

export default OurServices
