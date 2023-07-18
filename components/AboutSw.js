import React from 'react'
import styled from 'styled-components'

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
                    skapa användarvänliga, snygga och responsiva webbplatser. Se
                    mitt CV för mer information och erfarenheter.
                    <br />
                    <SweButton>SV</SweButton>
                    <EnButton>EN</EnButton>
                </AboutText>
                <AboutImage src='images/NyCv.JPG'/>
            </AboutInfoContainer>
        </AboutContainer>
    )
}

export default AboutSw

const AboutContainer = styled.div`
`

const AboutHeader = styled.h1 `
margin: 1.5rem;
`

const AboutInfoContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const AboutText = styled.p`
margin: 0 1.5rem;
`

const SweButton = styled.button`
margin: 2rem 0;
`

const EnButton = styled.button`
`

const AboutImage = styled.img`
width: 90vw;
border: 1px solid black;
`
