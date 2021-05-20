import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <nav className='navbar-class'>
            <Link to="my-skills" smooth={true}>My skills</Link >
            <Link to="my-projects" smooth={true}>My projects</Link >
            <Link to="my-testimonials" smooth={true}>My testimonials</Link >
        </nav>
    )
}
