import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function Experience({ workExperience = [], education = [] }) {
    return (
        <ExperienceContainer>
            {/* Arbetslivserfarenhet */}
            {workExperience.length > 0 && (
                <Section>
                    <SectionHeader>
                        Arbetslivserfarenhet
                        <HeaderUnderline />
                    </SectionHeader>
                    <ExperienceList>
                        {workExperience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <ExperienceItem>
                                    <TopRow>
                                        <JobTitle>{job.title}</JobTitle>
                                        {job.employmentType && (
                                            <EmploymentBadge>
                                                {job.employmentType}
                                            </EmploymentBadge>
                                        )}
                                    </TopRow>
                                    <BottomRow>
                                        <LocationWrapper>
                                            <LocationIcon>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                            </LocationIcon>
                                            <Company>{job.company}</Company>
                                        </LocationWrapper>
                                        <DateRange>{job.period}</DateRange>
                                    </BottomRow>
                                    {job.description && (
                                        <Description>{job.description}</Description>
                                    )}
                                </ExperienceItem>
                            </motion.div>
                        ))}
                    </ExperienceList>
                </Section>
            )}

            {/* Utbildning */}
            {education.length > 0 && (
                <Section>
                    <SectionHeader>
                        Utbildning
                        <HeaderUnderline />
                    </SectionHeader>
                    <ExperienceList>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <ExperienceItem>
                                    <TopRow>
                                        <JobTitle>{edu.degree}</JobTitle>
                                        {edu.studyType && (
                                            <EmploymentBadge>
                                                {edu.studyType}
                                            </EmploymentBadge>
                                        )}
                                    </TopRow>
                                    <BottomRow>
                                        <LocationWrapper>
                                            <LocationIcon>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                            </LocationIcon>
                                            <Company>{edu.school}</Company>
                                        </LocationWrapper>
                                        <DateRange>{edu.period}</DateRange>
                                    </BottomRow>
                                    {edu.description && (
                                        <Description>{edu.description}</Description>
                                    )}
                                </ExperienceItem>
                            </motion.div>
                        ))}
                    </ExperienceList>
                </Section>
            )}
        </ExperienceContainer>
    )
}

export default Experience

const ExperienceContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;

    @media (min-width: 769px) {
        padding: 3rem 3rem;
    }
`

const Section = styled.div`
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const SectionHeader = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    position: relative;
    display: inline-block;
    color: #1a1a1a;

    @media (min-width: 769px) {
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
    }
`

const HeaderUnderline = styled.div`
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #8b7355;
`

const ExperienceList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`

const ExperienceItem = styled.div`
    padding: 0.3rem;
    border-left: 3px solid #8b7355;
    background-color: #fafafa;
    border-radius: 0 6px 6px 0;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f5f5f5;
        border-left-width: 4px;
        transform: translateX(3px);
    }

    @media (min-width: 769px) {
        padding: 0.8rem 1.75rem;
    }
`

const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
`

const JobTitle = styled.h3`
    font-size: 0.8rem;
    font-weight: 300;
    color: #1a1a1a;
    margin: 0;
    flex: 1;
    min-width: 150px;

    @media (min-width: 769px) {
        font-size: 1.1rem;
    }
`

const EmploymentBadge = styled.span`
    padding: 0.3rem 0.8rem;
    background-color: #8b7355;
    color: white;
    border-radius: 20px;
    font-size: 0.55rem;
    font-weight: 500;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (min-width: 769px) {
        font-size: 0.6rem;
        padding: 0.3rem 1rem;
    }
`

const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`

const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`

const LocationIcon = styled.span`
    color: #8b7355;
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

const Company = styled.p`
    font-size: 0.6rem;
    color: #555;
    margin: 0;
    font-weight: 500;

    @media (min-width: 769px) {
        font-size: 0.7rem;
    }
`

const DateRange = styled.span`
    font-size: 0.6rem;
    color: #8b7355;
    font-weight: 500;
    white-space: nowrap;

    @media (min-width: 769px) {
        font-size: 0.7rem;
    }
`

const Description = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    color: #666;
    margin: 0.75rem 0 0 0;

    @media (min-width: 769px) {
        font-size: 0.95rem;
        line-height: 1.6;
    }
`