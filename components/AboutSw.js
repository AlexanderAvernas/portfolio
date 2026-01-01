import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Link from 'next/link'

function AboutSw() {
    return (
        <AboutContainer>
            <AboutHeader>
                About
                <HeaderUnderline />
            </AboutHeader>
            <AboutInfoContainer>
                <AboutTextWrapper>
                    <AboutText>
                        Hej! Jag heter Alexander, är 35 år och är utbildad
                        frontendutvecklare på it-högskolan i Stockholm. Jag har
                        alltid haft ett driv till att skapa och lösa problem. Som
                        person är jag målinriktad, kreativ och strukturerad. Jag
                        trivs med utmaningar för att lära mig nya saker och gillar
                        att arbeta både enskilt och i team. Jag är väldigt
                        intresserad och tycker det är kul att skapa användarvänliga,
                        snygga och responsiva webbplatser.
                        <br />
                        <br />
                        Se mitt CV för mer information och erfarenheter.
                    </AboutText>
                    <LanguageButtonContainer>
                        <SweButton>SV</SweButton>
                        <Link href="about/en">
                            <EnButton>EN</EnButton>
                        </Link>
                    </LanguageButtonContainer>
                </AboutTextWrapper>
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
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;

    @media (min-width: 769px) {
        margin-top: 9rem;
        padding: 0 4rem;
    }
`

const AboutHeader = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin: 1.5rem 0;
    position: relative;
    display: inline-block;

    @media (min-width: 769px) {
        margin-left: 0;
        margin-bottom: 3rem;
    }
    @media (min-width: 1450px) {
        font-size: 4rem;
    }
`

const HeaderUnderline = styled.div`
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: #8b7355;
`

const AboutInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    @media (min-width: 769px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 4rem;
    }
`

const AboutTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const AboutText = styled.p`
    margin: 0;
    font-weight: 400;
    line-height: 1.8;
    color: #2a2a2a;

    @media (min-width: 769px) {
        font-size: 1.1rem;
        font-weight: 400;
    }
`

const LanguageButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
`

const SweButton = styled.button`
    padding: 0.6rem 1.2rem;
    color: white;
    background-color: #8b7355;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background-color: #6b5335;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(139, 115, 85, 0.3);
    }
`

const EnButton = styled.button`
    padding: 0.6rem 1.2rem;
    color: #8b7355;
    background-color: white;
    border: 2px solid #8b7355;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background-color: #8b7355;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(139, 115, 85, 0.3);
    }
`

const CvContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    @media (min-width: 769px) {
        justify-content: flex-start;
    }
`

const CvButton = styled.button`
    width: 10rem;
    height: 3rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    color: white;
    background-color: #8b7355;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: #6b5335;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(139, 115, 85, 0.4);
    }
`

const AboutImage = styled.img`
    width: 100%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    @media (min-width: 769px) {
        width: 25vw;
        min-width: 300px;
        align-self: flex-start;
    }
`