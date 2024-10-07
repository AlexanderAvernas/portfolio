import { useEffect } from 'react'
import Hero from '@/components/Hero'
import HeroNew from '@/components/HeroNew'
import Prodjects from '@/components/Prodjects'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once when the component comes into view
        threshold: 0.2 // Percentage of the component visible to trigger the animation
    })

    useEffect(() => {
        // Send a request to wake up the backend as soon as the portfolio page loads
        const wakeUpBackend = async () => {
            try {
                await fetch('https://chat-app-9n6r.onrender.com/login', {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
                console.log('skickat iväg rquest')
            } catch (error) {
                console.error('Error waking up the backend:', error)
            }
        }

        wakeUpBackend()
    }, [])

    return (
        <>
            <Hero />
            {/* <HeroNew/> */}
            <div className="projectContainer">
                <h1 className="prodjectHeader">Projects</h1>
                <div className="ProjectInfocontainer">
                    {/* <Prodjects
                        image="images/JS.png"
                        info="AdVenture"
                        skills={['JavaScript', 'CSS', 'API', 'Github']}
                        link="Made with vanilla JavaScript and wheater API. First Project working with API. Made during a course in school."
                        projectLink="https://alexanderavernas.github.io/Js-Adventure-gh/"
                    /> */}
                    <Prodjects
                        image="images/MERN.png"
                        info="ChattApp"
                        skills={[
                            'React',
                            'MongoDB',
                            'Socket.io',
                            'TailwindCSS',
                            'Render'
                        ]}
                        link="Fullstack MERN-project. You may need to click the link twice because the server needs time to wake up, as I’m using a free plan on Render "
                        projectLink="https://chat-app-9n6r.onrender.com/login"
                    />
                    <Prodjects
                        image="images/portfolioCMS.png"
                        info="Gatsby-portfolio"
                        skills={[
                            'Headless CMS',
                            'Gatsby',
                            'Ionic Framework',
                            'Contentful'
                        ]}
                        link="Portfolio made with headless CMS using Contentful and Gatsby. Made it as a project in school."
                        projectLink="https://master--alexanderavernas.netlify.app/"
                    />
                    <Prodjects
                        image="images/VueSmall.png"
                        info="Skate-shop"
                        skills={['Vue', 'Figma', 'CSS', 'Bootstrap', 'Github']}
                        link="Project made with Vue Vite. Design made in Figma. Made During a Vue-course in school"
                        projectLink="https://alexanderavernas.github.io/Skate-vue-gh/"
                    />
                    <Prodjects
                        image="images/ReactSeries.png"
                        info="Series"
                        skills={['React', 'CSS', 'API', 'Github']}
                        link="Project made with React and API. First React app made as a project in school"
                        projectLink="https://rad-kataifi-792c7a.netlify.app/"
                    />
                    <Prodjects
                        image="images/Port.png"
                        info="Portfolio"
                        skills={['React', 'CSS', 'Next.js', 'Github']}
                        link="My portfolio made with Next.js. "
                    />

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : 100
                        }} // Change opacity and x position based on inView
                        transition={{ duration: 0.75 }}
                    >
                        <h4 className="prodjectProgress">
                            More project in progress
                        </h4>
                        <p className="prodjectLoading">Loading...</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
