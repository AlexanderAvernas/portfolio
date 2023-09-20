import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const router = useRouter()

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 769) {
                setIsMenuOpen(true)
            } else {
                setIsMenuOpen(false)
            }
        }

        handleResize() // Initialize menu state on component mount

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll) // Add scroll event listener


        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navbarClass = isScrolled ? 'navbar-container scrolled' : 'navbar-container'

    return (
        <nav className={navbarClass}>
            <div className="hamburger-menu" onClick={handleMenuToggle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li
                    className={`nav-menu-item ${
                        router.pathname === '/' ? 'active' : ''
                    }`}
                >
                    <Link className="nav-link-item" href="/">
                        Home
                    </Link>
                </li>
                <li
                    className={`nav-menu-item ${
                        router.pathname === '/about' ? 'active' : ''
                    }`}
                >
                    <Link className="nav-link-item" href="/about">
                        About
                    </Link>
                </li>
                <li
                    className={`nav-menu-item ${
                        router.pathname === '/contact' ? 'active' : ''
                    }`}
                >
                    <Link className="nav-link-item" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
