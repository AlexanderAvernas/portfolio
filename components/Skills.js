import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once when the component comes into view
        threshold: 0.2 // Percentage of the component visible to trigger the animation
    })

    return (
        <>
            <SkillHeader>Skills</SkillHeader>
            <SkillsContainer>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Change opacity and x position based on inView
                    transition={{ duration: 0.75 }}
                >
                    <Skillbubble>
                        <Skill>HTML</Skill>
                    </Skillbubble>
                </motion.div>
                <Skillbubble>
                    <Skill>CSS</Skill>
                </Skillbubble>
                <Skillbubble>
                    <Skill>JavaScript</Skill>
                </Skillbubble>
                <Skillbubble>
                    <Skill>Vue</Skill>
                </Skillbubble>
                <Skillbubble>
                    <Skill>React</Skill>
                </Skillbubble>
            </SkillsContainer>
        </>
    )
}

export default Skills

const SkillHeader = styled.h1`
    font-size: 2rem;
    margin-top: 2rem;
    padding-left: 1rem;
`

const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1rem 2rem;
    border-top: 1px solid black;
    
`

const Skillbubble = styled.div`
    text-align: center;
    width: 6rem;
    height: 3rem;
    margin: 1rem;
    border: 1px solid black;
    border-radius: 2rem;
    background-color: black;
`

const Skill = styled.p`
    padding-top: 0.7rem;
    color: white;
`
