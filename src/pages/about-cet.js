import React from "react";
import { Link } from "gatsby";
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
            <div className="overall-styling">
                <div className="abt-cgpu-main">
                    <div className="row abt-sub-1">
                        <div className="col-6 my-4">
                            <div className="page-head">About CET</div>
                            <div className="abt-desc">
                                Founded in 1989 under the reign of the Travancore King, Sri Chithira Thirunal
                                Varma,College of Engineering,Trivandrum is the first engineering collge in Kerala.
                                <br />
                                <br />
                                Ranked at <span className="textHighlights">85</span> among{" "}
                                <span className="textHighlights">engineering colleges in India by NIRF</span> in
                                2020,CET always rankis within top 100 engineering colleges of India every year. With
                                such an eminence in the academic and curricular activities,the College is the most
                                sought after engineering college by the applicants of engineering degree programmes in
                                the state.
                                <br />
                                <br />
                                <Link to="/" className="learnLink">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 img-main">
                            <AboutSVG main={aboutcet} />
                        </div>
                    </div>
                

                <div className="row justify-content-center">
                    <div className="feature-box">
                        <div >
                            <p className="numeric">8</p>
                            <p className="numeric-text">undergraduate programmes</p>
                        </div>

                        <div >
                            <p className="numeric">27</p>
                            <p className="numeric-text">postgraduate & doctoral programmes</p>
                        </div>
                        <div >
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
                        <div className="alumnicontent  col-6 my-4">
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
