import React from "react";
import Marquee from "react-fast-marquee";
import { recruitData } from "../components/data";
import "../styles/major.css";

const Major = () => {
    var first = recruitData.slice(0, 8);
    var second = recruitData.slice(8, 15);

    return (
        <div className="major my-5">
            <div className="majortext page-head">Our Major Recruiters</div>
            <div className="position-relative">
                <div className="major-overlay" />
                <Marquee>
                    {first.map((item) => {
                        return (
                            <div className="logo-card">
                                <img className="imageclass" alt={item.company} src={item.logo} />
                            </div>
                        );
                    })}
                </Marquee>
                <Marquee direction="right">
                    {second.map((item) => {
                        return (
                            <div className="logo-card">
                                <img className="imageclass" alt={item.company} src={item.logo} />
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default Major;
