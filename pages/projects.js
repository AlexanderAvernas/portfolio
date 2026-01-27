import { useEffect } from 'react'
import Prodjects from '@/components/Prodjects'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import StickyNavButton from '@/components/StickyNavButton'

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    useEffect(() => {
        const wakeUpBackend = async () => {
            try {
                await fetch('https://chat-app-9n6r.onrender.com/login', {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
            } catch (error) {
                console.error('Error waking up the backend:', error)
            }
        }
        wakeUpBackend()
    }, [])

    return (
        <>
            <div className="projectContainer">
                <h1 className="prodjectHeader">Projects</h1>
                <div className="ProjectInfocontainer">
                    <Prodjects
                        image="images/maSilver.png"
                        info="E-commerce"
                        skills={[
                            'Next.js',
                            'TailwindCss',
                            'localStorage',
                            'UseReducer',
                            'Sanity',
                            'Klarna'
                        ]}
                        link="A Next.js-powered e-commerce project integrated with Klarna for seamless payments and Sanity as a headless CMS for managing products and images. The shopping cart is efficiently handled using useReducer and localStorage, while Tailwind CSS ensures a modern and responsive design. Set to go live soon as a fully functional online store."
                        projectLink="https://margaretaavernas.se/"
                    />
                    <Prodjects
                        image="images/WatchList.png"
                        info="WatchList"
                        skills={[
                            'React',
                            'UseReducer',
                            'localStorage',
                            'API',
                            'React-loading-skeleton',
                            'styled-components'
                        ]}
                        link="A React-based application where users can search or browse hundreds of TV series, then save their favorites to a personalized MustWatchList using localStorage for persistence. The app handles state with useReducer, and uses react-loading-skeleton to display smooth loading states while fetching data from an API."
                        projectLink="https://mustwatchseries.netlify.app/"
                    />
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
                        link="Fullstack MERN-project. You may need to click the link twice because the server needs time to wake up, as I'm using a free plan on Render "
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
                        }}
                        transition={{ duration: 0.75 }}
                    >
                        <h4 className="prodjectProgress">
                            More project in progress
                        </h4>
                        <p className="prodjectLoading">Loading...</p>
                    </motion.div>
                </div>
            </div>
            
            <StickyNavButton />
        </>
    )
}