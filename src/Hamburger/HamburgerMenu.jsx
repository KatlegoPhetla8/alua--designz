import { Button, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerPositioner, DrawerRoot, DrawerTitle, DrawerTrigger, Icon, Link, Portal, VStack } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

function HamburgerMenu() {
    const [open, setOpen] = useState(false)
  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} size={"full"} motionPreset={"slide-in-bottom"}>
        <DrawerTrigger>
                <Icon 
                color={"rgb(212, 172, 121)"} 
                cursor={"pointer"} 
                boxSize={"45px"}
                css={{
                    "@media (max-width: 340px)": {
                    boxSize: "30px",
                    },
                }}
                as={RxHamburgerMenu}/>
        </DrawerTrigger>
        <Portal>
            <DrawerPositioner>
                <DrawerContent
                bgColor={"rgb(212, 172, 121)"}
                >
                    <DrawerHeader
                    justifyContent={"center"}
                    >
                        <DrawerTitle
                        fontSize={"30px"}
                        color={"whiteAlpha.800"}
                        
                        >
                            AD
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody
                    >
                        <VStack
                        pt={"2rem"}
                        flexDir={"column"}
                        textAlign={"center"}
                        gap={"2rem"}
                        >

                            {/*LINKS */}
                            <Link
                            onClick={(e) => setOpen(e.open)}
                            position={"relative"}
                            focusRing={"none"}
                            textDecor={"none"}
                            fontSize={{base:"20px",md:"20px", lg:"20px"}}
                            as={RouterLink}
                            to={"/"}
                            
                            color={"whiteAlpha.800"}
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
                        HOME
                            </Link>

                            <Link
                            onClick={(e) => setOpen(e.open)}
                            position={"relative"}
                            focusRing={"none"}
                            textDecor={"none"}
                            fontSize={{base:"20px",md:"20px", lg:"20px"}}
                            as={RouterLink}
                            to={"/services"}
                            color={"whiteAlpha.800"}
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
                            onClick={(e) => setOpen(e.open)}
                            position={"relative"}
                            focusRing={"none"}
                            textDecor={"none"}
                            fontSize={{base:"20px",md:"20px", lg:"20px"}}
                            as={RouterLink}
                            to={"/about"}
                            color={"whiteAlpha.800"}
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
                            onClick={(e) => setOpen(e.open)}
                            position={"relative"}
                            focusRing={"none"}
                            textDecor={"none"}
                            fontSize={{base:"20px",md:"20px", lg:"20px"}}
                            as={RouterLink}
                            to={"/contact"}
                            color={"whiteAlpha.800"}
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
                            onClick={(e) => setOpen(e.open)}
                            focusRing={"none"}
                            textDecor={"none"}
                            fontSize={{base:"16px",md:"18px", lg:"20px"}}
                            as={RouterLink}
                            to={"/enquire"}
                            >
                            <Button
                            fontSize={{base:"16px",md:"14px", lg:"16px"}}
                            _hover={{color:"rgb(212, 172, 121)", bgColor:"rgba(255, 255, 255, 0.8)", borderWidth:"2px", borderColor:"rgb(212, 172, 121)"}}
                            color={"rgb(212, 172, 121)"}
                            bgColor={"whiteAlpha.800"}
                            w={{base:"8rem", md:"8rem", lg:"10rem"}}
                            h={{base:"3rem", md:"4rem",lg:"4rem"}}
                            borderRadius={"2rem"}>
                                Enquire Now
                            </Button>
                            </Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerCloseTrigger
                    pt={""}
                    borderColor={"whiteAlpha.800"}
                    color={"whiteAlpha.800"}
                    fontSize={"20px"}
                    _hover={{cursor:"pointer"}}
                    >
                        X
                    </DrawerCloseTrigger>
                </DrawerContent>
            </DrawerPositioner>
        </Portal>
    </DrawerRoot>
  )
}

export default HamburgerMenu
