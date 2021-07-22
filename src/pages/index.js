import React from "react";
import Layout from "../components/layout";
import HomeSVG from "../components/homesvg";
import "../styles/index.css";
import logo from "../images/cet-logo.png";
import cetfront from "../images/cet-front.jpg";
import cgpufront from "../images/cgpu-front.jpg";
import cgpuhall from "../images/cgpu-hall.jpg";
import Bluebox from "../components/Bluebox";
import Objectives from "../components/Objectives";
import ThingsVal from "../components/ThingsVal";

export default function Home() {
    return (
        <Layout page="home">
            <div className="main-container">
                <div className="row firstabt">
                    <div className="order-md-2 col-12 col-md-4 col-lg-6 text-center">
                        <HomeSVG main={cetfront} left={cgpufront} right={cgpuhall} />
                    </div>
                    <div className="order-md-1 col-12 col-md-8 col-lg-6 text-center text-md-start">
                        <div className="page-head">
                            <img src={logo} alt="CET Seal" className="cet-logo py-3" />
                            <div className="col-8">
                                Career Guidance and Placement Unit, College of Engineering Trivandrum
                            </div>
                        </div>
                        <div className="desc">
                            <div className="mb-4">
                                We at CET believe in combining the three facets that together spell success. Ability,
                                Motivation and Attitude. CET's placement process aims to match the requirements of
                                recruiters and the aspirations of students.
                            </div>
                            <button className="learnbtn">Learn More</button>
                            <a href={`CET @ Glance.pdf`} download className="download px-4 py-2">
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
                <Bluebox />
                <ThingsVal />
                <Objectives />
            </div>
        </Layout>
    );
}
