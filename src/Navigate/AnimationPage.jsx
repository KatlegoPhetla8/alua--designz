import { Box } from "@chakra-ui/react";
import React from 'react'
import { motion } from "framer-motion";

function AnimationPage({children}) {
  
  return (
    <motion.div
    initial={{opacity:0, y: -100}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:100}}
    transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  )
}

export default AnimationPage

