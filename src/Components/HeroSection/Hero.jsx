import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../Button';
import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP, HeroBtnWrapper,ArrowFoward,ArrowRight } from  './HeroElements';

export default function Hero() {

    const [hover, setHover] =useState(false);
    const onHover = ()=>{
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}  type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Virtual Banking Made Easy</HeroH1>
                    <HeroP>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Illo qui aliquid ratione 
                        eligendi fugiat id corrupti asperiores nulla
                         non?
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' big='true' fontBig='true'>
                            Get started {hover ? <ArrowFoward /> : <ArrowRight />} 
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    );
}
