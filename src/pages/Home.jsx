import React, {useState} from 'react';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/HeroSection/Hero';
import {homeObjOne,homeObjTwo,homeObjThree} from '../Components/InfoSection/Data';
import InfoSection from '../Components/InfoSection/InfoSection';
import NavBar from '../Components/NavBar/NavBar';
import Services from '../Components/Services/Services';
import Sidebar from '../Components/Sidebar/SIdebar';
const Home = ()=>{
    
  const [isOpen, setIsOpen] = useState(false);


  const toggle = ()=>{
    setIsOpen(!isOpen)
  }
    return(
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Hero />
        {/* <InfoSection /> */}
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Footer />
        </>
    );
}
export default Home;