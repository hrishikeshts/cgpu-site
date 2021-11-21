import React from "react";
import Layout from "../components/layout";
import "../styles/recruiters.css";
import { recruiters } from "../data/recruiters";

export default function Recruiters() {
    return (
        <Layout page="recruiters">
            <div className="main-container mb-4 mb-md-0">
                <div className="align-self-start head-desc-main">
                    <div className="page-head">Our Recruiters</div>
                    <div className="head-desc">
                        <span>We have the world's leading companies coming forth to recruit our students. </span>
                        <span className="d-lg-block">
                            Register as a recruiter now to participate in our placement drive.
                        </span>
                    </div>
                    <a href="https://genskill.com/" target="_blank" rel="noopener noreferrer" className="learnLink">
                        Register as a recruiter
                    </a>
                </div>

                <div className="tiles-container">
                    {recruiters.map((item, key) => {
                        return (
                            <div key={key} className="tile-item">
                                <img src={`${item.logo}`} alt="Company Logo" className="tile-logo"></img>
                                <div className="tile-title">{item.company}</div>
                            </div>
                        );
                    })}
                </div>

                {/* <div className="row justify-content-center">
                    {recruiters.map((item, key) => {
                        return (
                            <div key={key} className="r-cards-each col-xl-3 col-md-4 col-sm-12">
                                <div className="r-cards-in">
                                    <div className="img-round">
                                        <img src={`${item.logo}`} alt="Company Logo" className="rec-logo"></img>
                                    </div>
                                    <div className="company-desc">
                                        <div className="item-company mb-1">{item.company}</div>
                                        <a
                                            href={`http://${item.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="item-url"
                                        >
                                            {item.url}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </Layout>
    );
}
