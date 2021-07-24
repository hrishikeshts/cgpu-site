import React from "react";
import Layout from "../components/layout";
import AboutSVG from "../components/about-svg";
import "../styles/about-cet.css";
import aboutcet from "../images/about-cet.jpg";
import cetaalogo from "../images/cetaa-logo.png";

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
            <div className="main-container mb-4 mb-md-0">
                <div className="row">
                    <div className="order-md-2 col-12 col-md-5 col-lg-6 text-center py-2 my-auto">
                        <AboutSVG main={aboutcet} />
                    </div>
                    <div className="order-md-1 col-12 col-md-7 col-lg-6 text-center text-md-start py-3 py-md-5">
                        <div className="page-head">About CET</div>
                        <div className="abt-desc">
                            Founded in 1989 under the reign of the Travancore King, Sri Chithira Thirunal Varma, College
                            of Engineering Trivandrum is the first engineering college in Kerala.
                            <br />
                            <br />
                            Ranked at <span className="textHighlights">85</span> among{" "}
                            <span className="textHighlights">engineering colleges in India by NIRF</span> in 2020, CET
                            always rankis within top 100 engineering colleges of India every year. With such an eminence
                            in the academic and curricular activities, the college is the most sought after engineering
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
                </div>
                <div className="bluebox row my-5 px-5 pt-4 pb-3">
                    <div className="col">
                        <p className="numeric">8</p>
                        <p className="numeric-text">
                            <div>undergraduate</div>
                            <div>programmes</div>
                        </p>
                    </div>
                    <div className="col">
                        <p className="numeric">27</p>
                        <p className="numeric-text">
                            <div>postgraduate &amp; doctoral programmes</div>
                        </p>
                    </div>
                    <div className="col">
                        <p className="numeric">4500</p>
                        <p className="numeric-text">
                            <div>students</div>
                            <div>studying</div>
                        </p>
                    </div>

                    <div className="col">
                        <p className="numeric">311+</p>
                        <p className="numeric-text">
                            <div>teaching</div>
                            <div>professionals</div>
                        </p>
                    </div>
                    <div className="col">
                        <p className="numeric">290+</p>
                        <p className="numeric-text">
                            <div>non-teaching</div>
                            <div>staff</div>
                        </p>
                    </div>
                </div>
                <svg viewBox="0 25 1110 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text fill="#4F4F4F" fontWeight="500" fontSize="14" x="0" y="170">
                        1939
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="20" x="0" y="195">
                        Established
                    </text>
                    <text fill="#7A8193" fontWeight="400" fontSize="14" x="0" y="218">
                        as the first engineering college in the state
                    </text>
                    <text fill="#4F4F4F" fontWeight="500" fontSize="14" x="390" y="45">
                        1960
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="20" x="390" y="72">
                        Shifted to the present campus
                    </text>
                    <text fill="#7A8193" fontWeight="400" fontSize="14" x="390" y="95">
                        new campus of sprawling 125 acres
                    </text>
                    <text fill="#4F4F4F" fontWeight="500" fontSize="14" x="1110" y="170" textAnchor="end">
                        2019
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="20" x="1110" y="195" textAnchor="end">
                        Celebrated 80 years
                    </text>
                    <text fill="#7A8193" fontWeight="400" fontSize="14" x="1110" y="218" textAnchor="end">
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

                <div className="row">
                    <div className="alm-cntnt col-12 col-md-5 col-lg-6 text-center text-md-start pe-md-5 py-4">
                        <div className="page-head">Our Alumni</div>
                        <div className="abt-desc">
                            CET alumni are distinguished forerunners in every possible technological field across the
                            world. The CET Alumni association,the CETAA is very much active in the college bringing
                            together the CET-ians of yesteryears and present cream.
                            <br />
                            <br />
                            <a
                                href="https://alumni.cet.ac.in/"
                                className="learnLink"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 py-2 my-auto my-4">
                        <div className="alumnicontent">
                            <div className="alumnititle">
                                <div className="alumnipic">
                                    <img src={cetaalogo} alt="cetaa-logo"></img>
                                </div>
                                <div className="alumniheading ps-4">
                                    College of Engineering Trivandrum Alumni Association
                                </div>
                            </div>
                            <ul className="my-2">
                                {alumni.map((x) => (
                                    <li className="abt-desc">{x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
