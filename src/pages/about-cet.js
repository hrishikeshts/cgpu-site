import React from "react";
import Layout from "../components/layout";
import AboutSVG from "../components/aboutsvg";
import aboutcet from "../images/about-cet.jpg";
import cetaalogo from "../images/cetaa-logo.png";

import "../styles/about-cet.css";
export default function AboutCET() {
    const alumni = [
        "15 chapters all over the world",
        "Annual GB Meeting",
        "CETAA Day celebration on 2nd Saturday of November every year",
        "Awards day",
        "More than 50 awards for students",
        "Financial assistance for 10 students",
        "Undertakes infrastructure development activities",
    ];

    return (
        <Layout page="cet">
            <div className="main-container">
                <div className="row abt-sub-1">
                    <div className="col-6 my-4">
                        <div className="page-head">About CET</div>
                        <div className="abt-desc">
                            Founded in 1989 under the reign of the Travancore King, Sri Chithira Thirunal Varma,College
                            of Engineering,Trivandrum is the first engineering collge in Kerala.
                            <br />
                            <br />
                            Ranked at <span className="textHighlights">85</span> among{" "}
                            <span className="textHighlights">engineering colleges in India by NIRF</span> in 2020,CET
                            always rankis within top 100 engineering colleges of India every year. With such an eminence
                            in the academic and curricular activities,the College is the most sought after engineering
                            college by the applicants of engineering degree programmes in the state.
                            <br />
                            <br />
                            <a
                                href="https://www.cet.ac.in/"
                                className="learnLink"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="col-6 img-main">
                        <AboutSVG main={aboutcet} />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="feature-box">
                        <div>
                            <p className="numeric">8</p>
                            <p className="numeric-text">undergraduate programmes</p>
                        </div>

                        <div>
                            <p className="numeric">27</p>
                            <p className="numeric-text">postgraduate & doctoral programmes</p>
                        </div>
                        <div>
                            <p className="numeric">4500</p>
                            <p className="numeric-text">students studying</p>
                        </div>

                        <div>
                            <p className="numeric">311+</p>
                            <p className="numeric-text">teaching professionals</p>
                        </div>
                        <div>
                            <p className="numeric">290+</p>
                            <p className="numeric-text">non-teaching staff</p>
                        </div>
                    </div>
                </div>
                <svg width="1110" height="257" viewBox="0 0 1110 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text fill="#4F4F4F" fontWeight="500" fontSize="16" x="0" y="170">
                        1939
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="23" x="0" y="200">
                        Established
                    </text>
                    <text fill="#828282" fontWeight="400" fontSize="16" x="0" y="225">
                        as the first engineering college in the state
                    </text>
                    <text fill="#4F4F4F" fontWeight="500" fontSize="16" x="390" y="40">
                        1960
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="23" x="390" y="70">
                        Shifted to the present campus
                    </text>
                    <text fill="#828282" fontWeight="400" fontSize="16" x="390" y="95">
                        new campus of sprawling 125 acres
                    </text>
                    <text fill="#4F4F4F" fontWeight="500" fontSize="16" x="1110" y="170" textAnchor="end">
                        2019
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="23" x="1110" y="200" textAnchor="end">
                        Celebrated 80 years
                    </text>
                    <text fill="#828282" fontWeight="400" fontSize="16" x="1110" y="225" textAnchor="end">
                        80th anniversary of nurturing young engineering minds
                    </text>

                    <circle opacity="0.3" cx="12" cy="130" r="12" fill="#2ECC71" />
                    <circle cx="12" cy="130" r="7.2" fill="#2ECC71" />
                    <circle opacity="0.3" cx="399" cy="130" r="12" fill="#2ECC71" />
                    <circle cx="399" cy="130" r="7.2" fill="#2ECC71" />
                    <circle opacity="0.3" cx="1098" cy="130" r="12" fill="#2ECC71" />
                    <circle cx="1098" cy="130" r="7.2" fill="#2ECC71" />
                    <line
                        opacity="0.3"
                        x1="24"
                        y1="128"
                        x2="387"
                        y2="128"
                        stroke="#7A8193"
                        stroke-width="2"
                        stroke-dasharray="8 8"
                    />
                    <line
                        opacity="0.3"
                        x1="411"
                        y1="128"
                        x2="1086"
                        y2="128"
                        stroke="#7A8193"
                        stroke-width="2"
                        stroke-dasharray="8 8"
                    />
                </svg>

                <div className="row abt-sub-1">
                    <div className="col-6 my-4 alm-cntnt">
                        <div className="page-head">Alumni</div>
                        <div className="abt-desc abt-cet-desc">
                            CET alumni ae distinguished forerunners in every possible technological field across the
                            world. The CET Alumni association,the CETAA is very much active in the college bringing
                            together the CET-ians of yesteryears and present cream.
                            <br />
                            <br />
                            <button className="learnbtn">Learn More</button>
                        </div>
                    </div>
                    <div className="col-6 my-4">
                        <div className="alumnicontent">
                            <div className="alumnititle">
                                <div className="alumnipic">
                                    <img src={cetaalogo} alt="cetaa-logo"></img>
                                </div>
                                <div className="alumniheading" style={{ marginLeft: "4%" }}>
                                    College of Engineering Trivandrum Alumni Association
                                </div>
                            </div>
                            <ul>
                                {alumni.map((x) => (
                                    <li className="abt-desc" style={{ fontSize: "18px" }}>
                                        {x}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
