import { Button, Container, Dialog, DialogBackdrop, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogPositioner, DialogRoot, DialogTitle, DialogTrigger, Portal } from '@chakra-ui/react'
import ServiceEnquireRoot from './ServiceEnquireRoot'
import useService from '../hooks/useService'
import { useState } from 'react';

function PopUpDialog({classList}) {
   const {servicePick, currService} = useService(); {/*Current service is the clicked service that is being sent to ServiceEnquireRoot */}

  return (
    <Container>
      <DialogRoot placement={"center"} size={"2xl"}>
        <DialogTrigger asChild>
            <Button
            onClick={()=> servicePick(classList)}
            bgColor={"whiteAlpha.800"}
            color={"rgb(212, 172, 121)"}
            borderRadius={"20px"}
            fontSize={"16px"}
            mt={"2rem"}
            w={"10rem"}
            h={"2.5rem"}
            _hover={{color:"rgb(212, 172, 121)", bgColor:"whiteAlpha.400"}}
            >Service Enquiry
            </Button>
        </DialogTrigger>
        <Portal>
            <DialogBackdrop 
            bgColor={"whiteAlpha.800"}/>
            <DialogPositioner >
                <DialogContent  bgColor={"whiteAlpha.800"}>
                    <DialogHeader>
                        <DialogTitle>
                            Service Enquiry
                        </DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <ServiceEnquireRoot pickedService={currService}/>
                    </DialogBody>
                    <DialogFooter>
                        <DialogCloseTrigger asChild>
                            <Button 
                            borderRadius={"20px"} 
                            color={"whiteAlpha.800"} 
                            bgColor={"rgb(212, 172, 121)"}
                            _hover={{color:"rgb(212, 172, 121)", bgColor:"whiteAlpha.800", borderWidth:"2px", borderColor:"rgb(212, 172, 121)"}}
                            >
                                Close
                            </Button>
                        </DialogCloseTrigger>
                    </DialogFooter>
                </DialogContent>
            </DialogPositioner>
        </Portal>
      </DialogRoot>
    </Container>
  )
}

export default PopUpDialog
