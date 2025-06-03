import { Box, defineAnimationStyles } from '@chakra-ui/react'
import React from 'react'

function AnimatePage({children}) {

  return (
   
    <Box
    data-state="open"
    animationDuration="slow"
    animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
        >
      {children}
    </Box>
  )
}

export default {AnimatePage}

export const animationStyles = defineAnimationStyles({
  bounceFadeIn: {
    value: {
      animationName: "bounce, fade-in",
      animationDuration: "300ms",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    },
  },
})
