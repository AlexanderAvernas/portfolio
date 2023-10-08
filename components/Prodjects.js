import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

function Prodjects(props) {
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once when the component comes into view
        threshold: 0.2 // Percentage of the component visible to trigger the animation
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Change opacity and x position based on inView
            transition={{ duration: 0.75 }}
        >
            <div className='ProjectComponentContainer'>
                <section className='ProjectTextContainer'>
                    <h4 className='ProdjectInfo'>{props.info}</h4>
                    <div className='SkillContainer'>
                    {props.skills.map((skill, index) => (
                            <p className='ProjectSkill' key={index}>{skill}</p>
                        ))}
                    </div>
                    <p className='ProjectLink'>{props.link}</p>
                </section>
                <div className='ProjectImageContainer'>
                    <a
                        href={props.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className='ImageProdject'
                            href={props.projectLink}
                            src={props.image}
                            alt="JavaScript project"
                        />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Prodjects

// const ProjectContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 2rem 2rem;
//     @media (min-width: 769px) {
//         flex-direction: row;
//         justify-content: center;
//     }
// `

// const ProjectTextContainer = styled.div`
//     @media (min-width: 769px) {
//         width: 27rem;
//         padding-top: 4rem;
//     }
// `

// const ProjectImageContainer = styled.div`
//     @media (min-width: 769px) {
//         margin-left: 1rem;
//     }
// `

// const ProdjectInfo = styled.h4``

// const SkillContainer = styled.div `
// display: flex;
// margin-top: 0.8rem;
// `

// const Skill = styled.p`
// border: 1px solid black;
// padding: 0.3rem 0.5rem;
// border-radius: 1rem;
// font-size: small;
// margin-right: 0.5rem;
// background-color: grey;
// color: white;
// `

// const ProjectLink = styled.p``

// const ImageProdject = styled.img`
//     width: 15rem;
//     margin-top: 0.5rem;
//     border: 0px solid black;
//     transition: transform 0.3s ease;
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);

//     /* Add hover effect */
//     &:hover {
//         transform: scale(1.05); /* Makes the image slightly bigger */
//          /* Adds a shadow on hover */
//     }
// `
