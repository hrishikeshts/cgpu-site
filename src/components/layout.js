import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import download from "../images/download.svg";
import "../styles/layout.css";

export default function Layout({ children, page }) {
    useEffect(() => {
        switch (page) {
            case "cet":
                document.title = "About CET – Career Guidance & Placement Unit CET";
                break;
            case "cgpu":
                document.title = "About CGPU – Career Guidance & Placement Unit CET";
                break;
            case "gallery":
                document.title = "Gallery – Career Guidance & Placement Unit CET";
                break;
            case "placement":
                document.title = "Placement Highlights – Career Guidance & Placement Unit CET";
                break;
            case "recruiters":
                document.title = "Recruiters – Career Guidance & Placement Unit CET";
                break;
            case "contact":
                document.title = "Contact Us – Career Guidance & Placement Unit CET";
                break;
            default:
                document.title = "Career Guidance & Placement Unit – College of Engineering Trivandrum";
        }
    }, [page]);

    return (
        <>
            <Header page={page} />
            {children}
            <div className="brochure-info d-md-flex text-md-start">
                <div>To know more about the college and placement details, please check out our brochure</div>
                <a href={`CET @ Glance.pdf`} download className="download">
                    <img src={download} alt="download" />
                    <span>Download Brochure</span>
                </a>
            </div>
            <Footer />
        </>
    );
}
