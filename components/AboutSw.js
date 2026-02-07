import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

function AboutSw() {
  return (
    <AboutSection>
      <Hero>
        <HeroImage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src="images/NyCv.JPG" alt="Alexander Avernäs" />
        </HeroImage>

        <HeroContent>
          {/* <Header>
                        <h1>About</h1>
                        <HeaderUnderline />
                    </Header> */}

          <AboutText>
            Hej! Jag heter Alexander och har lång erfarenhet från arbete inom
            vården, idag kompletterat med utbildning och praktisk erfarenhet
            inom IT och webbutveckling. Jag är intresserad av hur teknik kan
            användas i vårdnära sammanhang och trivs i miljöer där förståelse
            för både verksamhet och digitala lösningar är viktig.
            <br />
            <br />
            Min bakgrund inom vården ger mig god insikt i användarbehov,
            arbetsflöden och kvalitetskrav, samtidigt som min IT-kompetens gör
            att jag kan arbeta nära utveckling och andra IT-funktioner.
          </AboutText>

          <Actions>
            {/* <LanguageSwitch>
                            <SweButton>SV</SweButton>
                            <Link href="about/en">
                                <EnButton>EN</EnButton>
                            </Link>
                        </LanguageSwitch> */}

            <a
              href="https://drive.google.com/file/d/1xPsKUNiQbAqGAZDmrK6NHHq2XVZ63A9n/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CvButton>CV</CvButton>
            </a>
          </Actions>
        </HeroContent>
      </Hero>
    </AboutSection>
  );
}

export default AboutSw;

// ============================== STYLES ==============================

const AboutSection = styled.section`
  width: 100%;
  margin-top: 5rem;
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    min-height: 70vh;
  }
`;

const HeroImage = styled(motion.div)`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.65)
    );

    @media (min-width: 1024px) {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5rem;
  color: white;

  @media (min-width: 1024px) {
    position: relative;
    inset: auto;
    max-width: 600px;
    padding-top: 10rem;
    color: #2a2a2a;
    justify-content: flex-start;
  }
`;

/* const Header = styled.div`
    h1 {
        font-size: 3rem;
        margin: 0;
        font-weight: 600;
    }
` */

const HeaderUnderline = styled.div`
  width: 70px;
  height: 3px;
  background-color: #8b7355;
  margin-top: 0.5rem;
`;

const AboutText = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  color: inherit;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);

  @media (min-width: 1024px) {
    text-shadow: none;
    font-size: 1.05rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`;

const LanguageSwitch = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SweButton = styled.button`
  padding: 0.5rem 1.1rem;
  background-color: #8b7355;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const EnButton = styled.button`
  padding: 0.5rem 1.1rem;
  background-color: transparent;
  color: #8b7355;
  border: 2px solid #8b7355;
  border-radius: 6px;
  cursor: pointer;
`;

const CvButton = styled.button`
  padding: 0.6rem 1.6rem;
  background-color: #8b7355;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;
