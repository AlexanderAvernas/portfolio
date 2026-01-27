import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Link from 'next/link'

function AboutEn() {
    return (
        <AboutContainer>
            <Header>
                <h1>About</h1>
                <HeaderUnderline />
            </Header>

            <ContentGrid>
                <TextSection>
                    <AboutText>
                        Hello! My name is Alexander, I’m 35 years old and a trained
                        frontend developer from IT-Högskolan in Stockholm. I have
                        always had a strong drive to create and solve problems.
                        <br /><br />
                        As a person, I am goal-oriented, creative, and structured.
                        I enjoy challenges as they help me learn new things, and I
                        like working both independently and in teams.
                        <br /><br />
                        See my resumé for more information and experience.
                    </AboutText>

                    <Actions>
                        <LanguageSwitch>
                            <Link href="/about">
                                <SweButton>SV</SweButton>
                            </Link>
                            <EnButton>EN</EnButton>
                        </LanguageSwitch>

                        <a
                            href="https://drive.google.com/file/d/1HgYvcYfhjhtTO9JCaDILEUBEyJccwCqb/view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CvButton>Resumé</CvButton>
                        </a>
                    </Actions>
                </TextSection>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <AboutImage src="/images/NyCv.JPG" />
                </motion.div>
            </ContentGrid>
        </AboutContainer>
    )
}

export default AboutEn

/* -------------------- STYLES -------------------- */

const AboutContainer = styled.section`
    max-width: 1200px;
    margin: 6rem auto 0;
    padding: 0 2rem;

    @media (min-width: 768px) {
        margin-top: 8rem;
    }
`

const Header = styled.div`
    margin-bottom: 3rem;

    h1 {
        font-size: 3rem;
        font-weight: 600;
        margin: 0;
        position: relative;
        display: inline-block;
    }
`

const HeaderUnderline = styled.div`
    width: 70px;
    height: 3px;
    background-color: #8b7355;
    margin-top: 0.6rem;
`

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: 1.2fr 0.8fr;
        gap: 4rem;
        align-items: start;
    }
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const AboutText = styled.p`
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.65;
    color: #2a2a2a;
    max-width: 620px;
`

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
`

const LanguageSwitch = styled.div`
    display: flex;
    gap: 0.5rem;
`

const SweButton = styled.button`
    padding: 0.5rem 1.1rem;
    color: #8b7355;
    background-color: white;
    border: 2px solid #8b7355;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.25s ease;

    &:hover {
        background-color: #8b7355;
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(139, 115, 85, 0.3);
    }
`

const EnButton = styled.button`
    padding: 0.5rem 1.1rem;
    color: white;
    background-color: #8b7355;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.25s ease;

    &:hover {
        background-color: #6b5335;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(139, 115, 85, 0.3);
    }
`

const CvButton = styled.button`
    padding: 0.6rem 1.6rem;
    font-weight: 600;
    color: white;
    background-color: #8b7355;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.25s ease;

    &:hover {
        background-color: #6b5335;
        transform: translateY(-1px);
        box-shadow: 0 6px 14px rgba(139, 115, 85, 0.35);
    }
`

const AboutImage = styled.img`
    width: 100%;
    max-width: 380px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.18);
`