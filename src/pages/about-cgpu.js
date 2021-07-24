import React from "react";
import { eventData } from "../components/data";
import Layout from "../components/layout";
import "../styles/about-cgpu.css";
import AboutSVG from "../components/about-svg";
import aboutcgpu from "../images/about-cgpu.jpg";

export default function AboutCGPU() {
    return (
        <Layout page="cgpu">
            <div className="main-container mb-4 mb-md-0">
                <div className="row">
                    <div className="order-md-2 col-12 col-md-5 col-lg-6 text-center py-2 my-auto">
                        <AboutSVG main={aboutcgpu} />
                    </div>
                    <div className="order-md-1 col-12 col-md-7 col-lg-6 text-center text-md-start py-3 py-md-5">
                        <div className="page-head">About CGPU</div>
                        <div className="abt-desc">
                            The Career Guidance and Placement Unit (CGPU) was started in this college as a voluntary
                            organization in January 1984. The Placement Officer who is assisted by student
                            representatives from all the departments heads this unit. The Principal of the institution
                            and all other faculty members have extended their wholehearted support to the functioning of
                            the unit.
                            <br />
                            <br />
                            The unit is spread over an area of over 3500 sq.ft. It can accommodate 500 students at a
                            time for written test. It has an amphitheatre for Pre-Placement Talk. The unit is equipped
                            with a PA system, OHP, TV, VCR and an LCD projector. Other facilities include
                            air-conditioned rooms for group discussions and interviews.
                        </div>
                    </div>
                </div>
                <div className="ppl-cgpu mt-5">
                    <div className="page-head">People Behind CGPU</div>
                    <div className="cards-main row p-0">
                        {eventData.map((item) => {
                            return (
                                <div className="cards-each col-12 col-sm-6 col-md-4 col-xl-3">
                                    <div className="cards-in">
                                        <div className="img-bg"></div>
                                        <div className="text-left mx-3 my-3">
                                            <div className="item-name">{item.title}</div>
                                            <div className="item-pos">{item.posi}</div>
                                            <a href={`mailto:${item.mail}`} className="item-mail">
                                                {item.mail}
                                            </a>
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
