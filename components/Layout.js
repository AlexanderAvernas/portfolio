import React from 'react'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <div className="content">{children}</div>
            <section id="contact">
                <Footer/>
            </section>
        </div>
    )
}

export default Layout