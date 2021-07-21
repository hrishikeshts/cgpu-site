import React from "react";
import { Link } from "gatsby";
import "../styles/header.css";

export default function Header({ page }) {
    return (
        <>
            <header className="fixed-top">
                <Link to="/">
                    <span>cgpu</span>
                    <span>cet</span>
                </Link>
                <nav>
                    <Link to="/" className={page === "home" ? "active" : ""}>
                        Home
                    </Link>
                    <span class="dropdown">
                        <button
                            class="btn dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            About
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
            <header></header>
        </>
    );
}
