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

    return (
        <>
            <Hero />
            {/* <HeroNew/> */}
            <div className="projectContainer">
                <h1 className="prodjectHeader">Projects</h1>
                <div className="ProjectInfocontainer">
                    <Prodjects
                        image="images/JS.png"
                        info="AdVenture"
                        skills={['JavaScript', 'CSS', 'API','Github']}
                        link="Made with vanilla JavaScript and wheater API. First Project working with API. Made during a course in school."
                        projectLink="https://alexanderavernas.github.io/Js-Adventure-gh/"
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
                        skills={['React', 'CSS', 'API','Github']}
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
