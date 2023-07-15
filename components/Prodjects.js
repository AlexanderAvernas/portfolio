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
`

const ProjectTextContainer = styled.div`

`

const ProjectImageContainer = styled.div `

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
