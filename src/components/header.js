import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "../styles/header.css";

export default function Header({ page }) {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", getScroll);
        return () => {
            window.removeEventListener("scroll", getScroll);
        };
    });

    const getScroll = () => {
        if (window.scrollY >= 30) setScroll(true);
        else setScroll(false);
    };

    return (
        <>
            <header className={`fixed-top ${scroll ? "scrolled" : ""}`} style={{paddingLeft:"6%",paddingRight:"6%"}}>
                <Link to="/">
                    <span>cgpu</span>
                    <span>cet</span>
                </Link>
                <nav>
                    <Link to="/" className={page === "home" ? "active" : ""}>
                        Home
                    </Link>
                    <span className="dropdown">
                        <button
                            className={`btn dropdown-toggle ${
                                page === "cet"
                                    ? "active"
                                    : page === "cgpu"
                                    ? "active"
                                    : page === "gallery"
                                    ? "active"
                                    : ""
                            }`}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            About
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link to="/about-cet" className={page === "cet" ? "active" : ""}>
                                About CET
                            </Link>
                            <Link to="/about-cgpu" className={page === "cgpu" ? "active" : ""}>
                                About CGPU
                            </Link>
                            <Link to="/gallery" className={page === "gallery" ? "active" : ""}>
                                Gallery
                            </Link>
                        </ul>
                    </span>
                    <Link to="/placement" className={page === "placement" ? "active" : ""}>
                        Placement
                    </Link>
                    <Link to="/recruiters" className={page === "recruiters" ? "active" : ""}>
                        Recruiters
                    </Link>
                    <Link to="/contact" className={page === "contact" ? "active" : ""}>
                        Contact
                    </Link>
                    <button className="btn ml-4">Register</button>
                </nav>
            </header>
            <header />
        </>
    );
}
