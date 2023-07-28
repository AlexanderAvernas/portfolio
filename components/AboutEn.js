import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Link from 'next/link'

function AboutEn() {
    return (
        <AboutContainer>
            <AboutHeader>About Me</AboutHeader>
            <AboutInfoContainer>
                <AboutText>
                    Hello! My name is Alexander, I'm 35 years old and I'm an
                    aspiring frontend developer. I have always had a drive to
                    create and solve problems. As a person, I'm goal-oriented,
                    creative and structured. I enjoy challenges to learn new
                    things and I like to work both independently and in teams.
                    I'm very interested and I find it fun to create
                    user-friendly, good-looking and responsive websites.
                    <br />
                    <br />
                    See my resumé for more information and experience.
                    <br />
                    <Link href="/about">
                        <SweButton>SV</SweButton>
                    </Link>
                    <EnButton>EN</EnButton>
                </AboutText>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 1.5 }}
                >
                    <AboutImage src="../images/NyCv.JPG" />
                </motion.div>
            </AboutInfoContainer>
            <CvContainer>
                <CvButton>CV</CvButton>
            </CvContainer>
        </AboutContainer>
    )
}

export default AboutEn

const AboutContainer = styled.div``

const AboutHeader = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin: 1.5rem;

    @media (min-width: 769px) {
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
    margin: 2rem 0.6rem;
`

const EnButton = styled.button``
const CvContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CvButton = styled.button`
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
`

const AboutImage = styled.img`
    width: 90vw;
    border: 1px solid black;

    @media (min-width: 769px) {
        width: 25vw;
        align-self: baseline;
    }
`
