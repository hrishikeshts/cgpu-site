import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "../styles/index.css";
import HomeSVG from "../components/home-svg";
import Bluebox from "../components/Bluebox";
import ThingsVal from "../components/things-val";
import Major from "../components/major";
import Objectives from "../components/Objectives";
import logo from "../images/cet-logo.png";
import cetfront from "../images/cet-front.jpg";
import cgpufront from "../images/cgpu-front.jpg";
import cgpuhall from "../images/cgpu-hall.jpg";

export default function Home() {
    return (
        <Layout page="home">
            <div className="main-container pb-0">
                <div className="row firstabt">
                    <div className="order-md-2 col-12 col-md-6 col-lg-7 text-center py-2 my-auto">
                        <HomeSVG main={cetfront} left={cgpufront} right={cgpuhall} />
                    </div>
                    <div className="order-md-1 col-12 col-md-6 col-lg-5 text-center text-md-start">
                        <div className="page-head">
                            <img src={logo} alt="CET Seal" className="cet-logo py-2 py-md-3" />
                            <div className="title mx-auto mx-md-0">
                                Career Guidance and Placement Unit, College of Engineering Trivandrum
                            </div>
                        </div>
                        <div className="desc">
                            <div className="mb-4">
                                We at CET believe in combining the three facets that together spell success. Ability,
                                Motivation and Attitude. CET's placement process aims to match the requirements of
                                recruiters and the aspirations of students.
                            </div>
                            <Link to="/about-cgpu" className="btn learnbtn">
                                Learn More
                            </Link>
                            <a href={`CET @ Glance.pdf`} download className="download px-4 py-2">
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
                <Bluebox />
                <ThingsVal />
            </div>
            <Major />
            <div className="main-container mb-4 mb-md-0">
                <Objectives />
            </div>
        </Layout>
    );
}
