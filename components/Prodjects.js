import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Prodjects(props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const [isLoading, setIsLoading] = useState(false)
    const [showRetryButton, setShowRetryButton] = useState(false)
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

    const handleFirstClick = async (e) => {
        if (props.info === 'ChattApp') {
            e.preventDefault()
            setIsLoading(true)
            setShowRetryButton(false)

            try {
                await fetch(props.projectLink, {
                    method: 'HEAD',
                    mode: 'no-cors'
                })

                setTimeout(() => {
                    setIsLoading(false)
                    setShowRetryButton(true)
                }, 1000)
            } catch (error) {
                console.error('Error waking up the backend:', error)
                setIsLoading(false)
                setShowRetryButton(true)
            }
        }
    }

    const handleRetryClick = () => {
        window.open(props.projectLink, '_blank', 'noopener noreferrer')
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ duration: 0.75 }}
        >
            <div className="ProjectComponentContainer">
                <section className="ProjectTextContainer">
                    <h4 className="ProdjectInfo">{props.info}</h4>
                    <div className="SkillContainer">
                        {props.skills.map((skill, index) => (
                            <p className="ProjectSkill" key={index}>
                                {skill}
                            </p>
                        ))}
                    </div>
                    
                    {/* Utfällbar beskrivning */}
                    <p className={`ProjectLink ${isDescriptionExpanded ? 'expanded' : ''}`}>
                        {props.link}
                    </p>
                    {props.link && (
                        <button 
                            className="ReadMoreButton"
                            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                        >
                            {isDescriptionExpanded ? '↑ Visa mindre' : '↓ Read more'}
                        </button>
                    )}
                </section>

                <div className="ProjectImageContainer">
                    {props.info === 'ChattApp' ? (
                        isLoading ? (
                            <div className="LoadingContainer">
                                <img
                                    className="BlurryImage"
                                    src={props.image}
                                    alt={`${props.info} project`}
                                />
                                <p className="LoadingText">
                                    Loading... Warming up the server.
                                </p>
                                <div className="LoadingDots">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        ) : showRetryButton ? (
                            <div
                                className="LoadingContainer"
                                onClick={handleRetryClick}
                            >
                                <img
                                    className="BlurryImage"
                                    src={props.image}
                                    alt={`${props.info} project`}
                                />
                                <p className="LoadingText">
                                    Click again to open!
                                </p>
                            </div>
                        ) : (
                            <a
                                href={props.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleFirstClick}
                                className="ProjectImageLink"
                            >
                                <img
                                    className="ImageProdject"
                                    src={props.image}
                                    alt={`${props.info} project`}
                                />
                            </a>
                        )
                    ) : (
                        <a
                            href={props.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ProjectImageLink"
                        >
                            <img
                                className="ImageProdject"
                                src={props.image}
                                alt={`${props.info} project`}
                            />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Prodjects