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
                <a
                    href="https://drive.google.com/file/d/1cZporYas0gjOLxm_shyTL-v11Rozomdm/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CvButton>CV</CvButton>
                </a>
            </CvContainer>
        </AboutContainer>
    )
}

export default AboutEn

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
        margin-bottom: -3rem;
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
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px; /* Add rounded corners */
    cursor: pointer; /* Add a pointer cursor on hover */

    &:hover {
        background-color: #333; /* Change color on hover */
    }
`

const EnButton = styled.button`
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
