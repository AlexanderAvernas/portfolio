import Hero from '@/components/Hero'
import Prodjects from '@/components/Prodjects'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once when the component comes into view
        threshold: 0.2, // Percentage of the component visible to trigger the animation
      });

    return (
        <>
            <Hero />
            <div className='projectContainer'>
            <h1 className='prodjectHeader'>Projects</h1>
            <div className='ProjectInfocontainer'>
            <Prodjects
            image="images/Vue.png"
            info="Project with Vue vite single page application"
            link=""/>
            <Prodjects
            image="images/JS.png"
            info="Project using vanilla JavaScript, HTML and CSS"
            link=""/>
            <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Change opacity and x position based on inView
            transition={{ duration: 0.75 }}
            >
            <h4 className='prodjectProgress'>More project in progress</h4>
            <p className='prodjectLoading'>Loading...</p>
            </motion.div>
            </div>
            </div>

        </>
    )
}
