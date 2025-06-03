import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function LoadSpinner() {
  return (
    <Box 
    height={{base:"100vh",md:"100vh",lg:"100vh"}} 
    position={"relative"}
    w={"100%"}
    inset={'0'} 
    bgColor={"whiteAlpha.800"}
    >
        <VStack alignItems={"center"}>
      <Spinner mt={{base:"20rem", md:"20rem", lg:"20rem"}} color={"rgb(212, 172, 121)"} size={"lg"}/>
      <Text color={"rgb(212, 172, 121)"} >Loading Content...</Text>
        </VStack>
    </Box>
  )
}

export default LoadSpinner
