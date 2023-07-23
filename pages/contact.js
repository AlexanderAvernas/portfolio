import React from 'react'
import {motion} from 'framer-motion'

function contact() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 1.5 }}>
    <div>contact</div>
    </motion.div>
  )
}

export default contact
