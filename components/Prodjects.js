import React from 'react'
import styled from 'styled-components'

function Prodjects(props) {
  return (
    <ProjectContainer>
        <ProjectTextContainer>
            <ProdjectInfo>{props.info}</ProdjectInfo>
            <ProjectLink>{props.link}</ProjectLink>
        </ProjectTextContainer>
        <ProjectImageContainer>
            <ImageProdject src={props.image} alt="JavaScript prodject"/>
        </ProjectImageContainer>

    </ProjectContainer>
  )
}

export default Prodjects

const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 2rem ;
@media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
}
`


const ProjectTextContainer = styled.div`
@media (min-width: 769px) {
    width: 30rem;
    padding-top: 2.5rem;
}

`

const ProjectImageContainer = styled.div `
@media (min-width: 769px) {
    margin-left: 1rem ;
}

`

const ProdjectInfo = styled.h4 `

`

const ProjectLink = styled.a`
`

const ImageProdject = styled.img`
width: 10rem;
margin-top: 0.5rem;
border: 1.5px solid black;
`
