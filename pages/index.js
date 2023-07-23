import Hero from '@/components/Hero'
import Prodjects from '@/components/Prodjects'

export default function Home() {
    return (
        <>
            <Hero />
            <h1 className='prodjectHeader'>Prodjects</h1>
            <div className='ProjectInfocontainer'>
            <Prodjects
            image="images/Vue.png"
            info="Project with Vue vite single page application"
            link="https://alexanderavernas.github.io/Skate-vue-gh/"/>
            <Prodjects
            image="images/JS.png"
            info="Project using vanilla JavaScript, HTML and CSS"
            link="https://alexanderavernas.github.io/Js-Adventure-gh/"/>
            </div>
            <h4 className='prodjectProgress'>More project in progress</h4>
            <p className='prodjectLoading'>Loading...</p>
        </>
    )
}
