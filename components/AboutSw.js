import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Link from 'next/link'

function AboutSw() {
    return (
        <AboutContainer>
            <AboutHeader>About Me</AboutHeader>
            <AboutInfoContainer>
                <AboutText>
                    Hej! Jag heter Alexander, är 35 år och är en blivande
                    frontendutvecklare. Jag har alltid haft ett driv till att
                    skapa och lösa problem. Som person är jag målinriktad,
                    kreativ och strukturerad. Jag trivs med utmaningar för att
                    lära mig nya saker och gillar att arbeta både enskilt och i
                    team. Jag är väldigt intresserad och tycker det är kul att
                    skapa användarvänliga, snygga och responsiva webbplatser.
                    <br />
                    <br />
                    Se mitt CV för mer information och erfarenheter.
                    <br />
                    <SweButton>SV</SweButton>
                    <Link href="about/en">
                        <EnButton>EN</EnButton>
                    </Link>
                </AboutText>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 1.5 }}
                >
                    <AboutImage src="images/NyCv.JPG" />
                </motion.div>
            </AboutInfoContainer>
            <CvContainer>
                <a
                    href="https://drive.google.com/file/d/1xPsKUNiQbAqGAZDmrK6NHHq2XVZ63A9n/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CvButton>CV</CvButton>
                </a>
            </CvContainer>
        </AboutContainer>
    )
}

export default AboutSw

const AboutContainer = styled.div`
    margin-top: 5rem;


    @media (min-width: 769px) {
        margin-top: 9rem;
    }
`

const AboutHeader = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin: 1.5rem;

    @media (min-width: 769px) {
        margin-left: 9rem;
        margin-bottom: -2rem;
    }
    @media (min-width: 1450px) {
        font-size: 4rem;
    }
`

const AboutInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 769px) {
        flex-direction: row;
    }
`

const AboutText = styled.p`
    margin: 0 1.5rem;
    font-weight: 500;
    line-height: 1.6;

    @media (min-width: 769px) {
        width: 50vw;
        font-size: 1.1rem;
        font-weight: 500;
    }
`

const SweButton = styled.button`
    margin: 2rem 0.3rem;
    padding: 0.5rem 1rem; /* Add padding for better button appearance */
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px; /* Add rounded corners */
    cursor: pointer; /* Add a pointer cursor on hover */

    &:hover {
        background-color: #333; /* Change color on hover */
    }
`

const EnButton = styled.button`
    margin: 2rem 0.3rem;
    padding: 0.5rem 1rem; /* Add padding for better button appearance */
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px; /* Add rounded corners */
    cursor: pointer; /* Add a pointer cursor on hover */

    &:hover {
        background-color: #333; /* Change color on hover */
    }
`

const CvContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CvButton = styled.button`
    width: 10rem;
    height: 3rem;
    font-weight: 600;
    margin-top: 2rem;
    padding: 0.5rem 1rem; /* Add padding for better button appearance */
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px; /* Add rounded corners */
    cursor: pointer; /* Add a pointer cursor on hover */

    &:hover {
        background-color: #333; /* Change color on hover */
    }
`

const AboutImage = styled.img`
    width: 90vw;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);

    @media (min-width: 769px) {
        width: 25vw;
        align-self: baseline;
    }
`
