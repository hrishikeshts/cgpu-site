import React from "react";
import { Link } from "gatsby";
import "../styles/header.css";

export default function Header() {
    return (
        <header>
            <Link to='/'>
                <span>cgpu</span>
                <span>cet</span>
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about-cet'>About CET</Link>
                <Link to='/about-cgpu'>About CGPU</Link>
                <Link to='/placement'>Placement</Link>
                <Link to='/recruiters'>Recruiters</Link>
                <Link to='/contact'>Contact</Link>
                <button className='btn ml-4'>Register</button>
            </nav>
        </header>
    );
}
