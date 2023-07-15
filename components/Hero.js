import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <HeroContainer>
        <HeaderContainer>
        <Header>Alexander <br /> Avernäs</Header>
        <Secondheader>Frontend-develepor</Secondheader>
        <Thirdheader>Student at IT-högskolan <br />Stockholm</Thirdheader>
        </HeaderContainer>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div `
background-color: black;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;

@media screen and (min-width: 769px) {
    justify-content: left;
    padding: 10rem;
    height: 70vh;


}

`
const Header = styled.h1 `
color: white;
line-height: 1;
font-weight: 700;
font-size: 3.5rem;
margin-bottom: 0;
`
const Secondheader = styled.h2`
color: green;
font-size: 2rem;
margin-bottom: 0;
`

const Thirdheader = styled.h4 `
color: purple;
font-size: 1.3rem;
`
const HeaderContainer = styled.div `

`
