'use client'

import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineAnimationStyles } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  const system = createSystem(defaultConfig,{
    theme:{
      tokens:{
        fonts:{
          heading: {value: `"Verdana", 'sans-serif'`},
          body:{value:`"Verdana", 'sans-serif'`}
        }
      }
    },
    globalCss:{
      'html, body':{
        color:"rgb(212, 172, 121)",
        bgColor:"rgba(255, 255, 255, 0.8)",
        
      }
    }
  });

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

