import React from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/layout.css";
import Download from "../images/download.svg";

export default function Layout({ children, page }) {
    document.title = "Career Guidance & Placement Unit – College of Engineering Trivandrum";
    return (
        <>
            <Header page={page} />
            {children}
            <div className="brochure-info">
                <span>To know more about the college and placement details, please check out our brochure</span>
                <a href={`CET @ Glance.pdf`} download className="download">
                    <img src={Download} alt="download" />
                    <span>Download Brochure</span>
                </a>
            </div>
            <Footer />
        </>
    );
}
