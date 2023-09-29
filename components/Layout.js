import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <div className='navbar-wrapper'>
            <Navbar />
            </div>
            <div className="content">{children}</div>
            <section id="contact">
            <Footer/>
            </section>
        </div>
    )
}

export default Layout
