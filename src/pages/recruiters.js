import React from "react";
import Layout from "../components/layout";
import "../styles/recruiters.css";
import { recruitData } from "../components/data";

export default function Recruiters() {
    return (
        <Layout page="recruiters">
            <div className="main-container">
                <div className="align-self-start head-desc-main">
                    <div className="page-head">Our Recruiters</div>
                    <div className="head-desc">
                        We have the world's leading companies coming forth to recruit our students. Register as a
                        recruiter now to participate in our placement drive.
                    </div>
                </div>
                <a href="https://genskill.com/" target="_blank" rel="noopener noreferrer">
                    <b>Register as a recruiter</b>
                </a>
                <div>
                    <div className="r-cards-main row">
                        {recruitData.map((item) => {
                            return (
                                <div className="r-cards-each col-xl-3 col-md-4 col-sm-12">
                                    <div className="r-cards-in">
                                        <div className="img-round">
                                            <img src={`${item.logo}`} className="rec-logo"></img>
                                        </div>
                                        <div className="company-desc">
                                            <div className="item-company">{item.company}</div>
                                            <div className="item-url">{item.url}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
