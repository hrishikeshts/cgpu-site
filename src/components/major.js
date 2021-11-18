import React from "react";
import { Link } from "gatsby";
import Marquee from "react-fast-marquee";
import { recruiters } from "../data/recruiters";
import "../styles/major.css";

const Major = () => {
    var first = recruiters.slice(0, 8);
    var second = recruiters.slice(8, 15);

    return (
        <div className="major my-5">
            <div className="majortext page-head">Our Recruiters</div>
            <div className="position-relative">
                <div className="major-overlay" />
                <Marquee>
                    {first.map((item, key) => {
                        return (
                            <div key={key} className="logo-card">
                                <img className="imageclass" alt={item.company} src={item.logo} />
                            </div>
                        );
                    })}
                </Marquee>
                <Marquee direction="right">
                    {second.map((item, key) => {
                        return (
                            <div key={key} className="logo-card">
                                <img className="imageclass" alt={item.company} src={item.logo} />
                            </div>
                        );
                    })}
                </Marquee>
            </div>
            <div className="text-center mt-4">
                <Link to="/recruiters" className="btn learnbtn white">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Major;
