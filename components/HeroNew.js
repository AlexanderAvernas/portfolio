import React from 'react'
import styled from 'styled-components'

function HeroNew() {
    return (
        <HeroContainer>
            <LeftDiv>
                <LeftHeader>
                    {/* Frontend <br />
                    Developer */}
                </LeftHeader>
                <HeroImage src='images/HeroImage.png' alt='Profile imgage'/>
            </LeftDiv>
            <RigthDiv>
                <TextContainer>
                <RightHeader>Frontend Developer</RightHeader>
                </TextContainer>
            </RigthDiv>
        </HeroContainer>
    )
}

export default HeroNew

const HeroContainer = styled.div`
`

const LeftDiv = styled.div`
    background-color: #24BCA3;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftHeader = styled.h1`
`

const RightHeader = styled.h2`
position: relative;
`

const TextContainer = styled.div`
position: relative;
top: 10vh;
display: flex;
align-items: center;
justify-content: center;

`

const RigthDiv = styled.div`
    background-color: #f2f2f2;
    height: 40vh;
`
const HeroImage = styled.img`
width: 50vw;
position: relative;
top: 5vh;
border: 2px solid grey;
border-radius: 50%;
`
