import { Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Header from './Header and Footer/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Page Components/Home';
import OurServices from './Page Components/OurServices';
import AboutUs from './Page Components/AboutUs';
import Contact from './Page Components/Contact';
import EnquireNow from './Page Components/EnquireNow';
import Footer from './Header and Footer/Footer';
import AnimationPage from './Navigate/AnimationPage';
import { AnimatePresence } from 'framer-motion';
import useScrollTop from './Navigate/useScrollTop'
import { Toaster } from './components/ui/toaster';

function App() {
const location = useLocation();
const scrollTop = useScrollTop();

  return (
    <>
    <Toaster/>
    <Header />
    <AnimatePresence mode="wait" onExitComplete={scrollTop}>
    
    <Routes
    location={location}
    key={location.key} 
    >
      <Route path='/' element={<AnimationPage><Home/></AnimationPage>}/>
      <Route path='/services' element={<AnimationPage><OurServices/></AnimationPage>}/>
      <Route path='/about' element={<AnimationPage><AboutUs/></AnimationPage>}/>
      <Route path='/contact' element={<AnimationPage><Contact/></AnimationPage>}/>
      <Route path='/enquire' element={<AnimationPage><EnquireNow/></AnimationPage>}/>
    </Routes>
    </AnimatePresence>
    <Footer/>
    <Text
    pb={"1rem"}
    textAlign={"center"}
    fontWeight={"semibold"}
    fontSize={{base:"16px", md:"20px", lg:"22px"}}
    >
    ALUA DESIGNZ
    </Text>
    </>
  )
}

export default App