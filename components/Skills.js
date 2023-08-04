import React from 'react'
import styled from 'styled-components'

function Skills() {
  return (
    <SkillsContainer>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>Vue</Skill>
        <Skill>React</Skill>
        <Skill>Node</Skill>
        <Skill>Node</Skill>
    </SkillsContainer>
  )
}

export default Skills

const SkillsContainer = styled.div `
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding-top: 4rem;
`

const Skill = styled.h5`
margin: 1.5rem;
border-radius: 1rem;
`
