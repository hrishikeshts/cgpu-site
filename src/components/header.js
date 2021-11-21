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
        <header className={`sticky-top navbar navbar-expand-lg${scroll ? " scrolled" : ""}`}>
            <Link to="/" className="py-2 py-lg-0">
                <span>cgpu</span>
                <span>cet</span>
            </Link>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <nav>
                    <Link to="/" className={`d-flex d-lg-inline ps-0 pe-5 px-lg-3 ${page === "home" ? "active" : ""}`}>
                        Home
                    </Link>
                    <span className="dropdown d-flex d-lg-inline">
                        <button
                            className={`btn dropdown-toggle ps-0 pe-5 px-lg-3 ${
                                page === "cet" ? "active" : page === "cgpu" ? "active" : ""
                            }`}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            About
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <Link to="/about-cet" className={`${page === "cet" ? "active" : ""}`}>
                                About CET
                            </Link>
                            <Link to="/about-cgpu" className={`${page === "cgpu" ? "active" : ""}`}>
                                About CGPU
                            </Link>
                        </ul>
                    </span>
                    <Link
                        to="/placement"
                        className={`d-flex d-lg-inline ps-0 pe-5 px-lg-3 ${page === "placement" ? "active" : ""}`}
                    >
                        Placement
                    </Link>
                    <Link
                        to="/recruiters"
                        className={`d-flex d-lg-inline ps-0 pe-5 px-lg-3 ${page === "recruiters" ? "active" : ""}`}
                    >
                        Recruiters
                    </Link>
                    <Link
                        to="/gallery"
                        className={`d-flex d-lg-inline ps-0 pe-5 px-lg-3 ${page === "gallery" ? "active" : ""}`}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/contact"
                        className={`d-flex d-lg-inline ps-0 pe-5 px-lg-3 ${page === "contact" ? "active" : ""}`}
                    >
                        Contact
                    </Link>
                    {/* <button className="btn my-2 my-lg-0 ms-lg-3 d-block d-lg-inline-block">Register</button> */}
                    <span className="dropdown d-flex d-lg-inline">
                        <button
                            className={"btn my-2 my-lg-0 ms-lg-3 d-block d-lg-inline-block"}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Register
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <a
                                href="https://genskill.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="learnLink"
                            >
                                Student
                            </a>
                            <a
                                href="https://genskill.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="learnLink"
                            >
                                Recruiter
                            </a>
                        </ul>
                    </span>
                </nav>
            </div>
        </header>
    );
}
