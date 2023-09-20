import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once when the component comes into view
        threshold: 0.2 // Percentage of the component visible to trigger the animation
    })
    return (
        <BigContainer>
            <HeroContainer>
                <motion.div
                   ref={ref}
                   initial={{ opacity: 0, x: -100 }} // Startposition till vänster
                   animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Ändra x för att flytta texten
                   transition={{ duration: 0.75 }}>
                    <HeaderContainer>
                        <Header>
                            Frontend <br /> Developer
                        </Header>
                        <Secondheader>Frontend-develepor</Secondheader>
                        <Thirdheader>
                            Student at IT-högskolan <br />
                            Stockholm
                        </Thirdheader>
                    </HeaderContainer>
                </motion.div>
            </HeroContainer>
            <HeroRightContainer>
                <ImgContainer>
                    <HeroImage
                        src="images/HeroImage.png"
                        alt="Profile imgage"
                    />
                    {/* <ImgHeader>Alexander Avernäs</ImgHeader> */}
                    <ButtonContainer>
                        <AboutButton>About me</AboutButton>
                        <ContactButton>Contact</ContactButton>
                    </ButtonContainer>
                </ImgContainer>
            </HeroRightContainer>
        </BigContainer>
    )
}

export default Hero

const BigContainer = styled.div`
    @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
    }
`

const HeroContainer = styled.div`
    background-color: #06043E;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 769px) {
        justify-content: left;
        padding: 10rem;
        height: 100vh;
        width: 60vw;
    }
`
const Header = styled.h1`
    color: white;
    line-height: 1;
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 0;
    overflow: hidden; // Dölj texten som inte ryms i elementet
    white-space: nowrap; // Förhindra att texten bryts över flera rader
`
const Secondheader = styled.h2`
    color: #24bca3;
    font-size: 2rem;
    margin-bottom: 0;
`

const Thirdheader = styled.h4`
    color: purple;
    font-size: 1.3rem;
`
const HeaderContainer = styled.div``

const HeroRightContainer = styled.div`
    background-color: #DBE1E7;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 769px) {
        width: 40vw;
        height: 100vh;
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -20vh;

    @media (min-width: 769px) {
        flex-direction: row;
    }
`

const HeroImage = styled.img`
    width: 45vw;
    position: relative;
    /* top: -10vh; */
    border: 2px solid white;
    border-radius: 50%;

    @media (min-width: 769px) {
        width: 10rem;
        right: 10.2vw;
        top: -1rem;
    }
`

const ImgHeader = styled.h2`
    margin-top: 1rem;
    font-style: italic;

    @media (min-width: 769px) {
        margin-top: 7rem;
        margin-left: -4rem;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    @media (min-width: 769px) {
        margin-left: -8rem;
        margin-right: 3rem;
        margin-top: 7rem;
    }
`

const AboutButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 40vw;
    margin-right: 0.5rem;
    background-color: black;
    color: white;
    font-weight: 500;

    @media (min-width: 769px) {
        width: 12vw;
        padding: 0.75rem 0rem;
    }
`

const ContactButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 40vw;
    margin-left: 0.5rem;
    background-color: black;
    color: white;
    font-weight: 500;

    @media (min-width: 769px) {
        width: 12vw;
        padding: 0.75rem 0rem;
    }
`
