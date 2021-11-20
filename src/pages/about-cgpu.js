import React, { useState } from "react";
import { head, faculty, reps } from "../data/people";
import Layout from "../components/layout";
import "../styles/about-cgpu.css";
import AboutSVG from "../components/about-svg";
import aboutcgpu from "../images/about-cgpu.jpg";

export default function AboutCGPU() {
    const [more, setMore] = useState(0);
    const repsToggle = more ? reps : reps.slice(0, 5);
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
                            The Career Guidance and Placement Unit (CGPU) was formed in January 1984. The Placement
                            Officer who is assisted by student representatives from all the departments heads this unit.
                            The Principal of the institution and all other faculty members have extended their
                            wholehearted support to the functioning of the unit.
                            <br />
                            <br />
                            {/* Spanning across an area over 3500 sq feet.{" "} */}
                            {/* CGPU can accomodate 500 students at a time for written test. */}
                            {/* It is well equipped with high quality audio and video systems suitable for preplacement
                            talks, group discussions and interviews. */}
                        </div>
                    </div>
                </div>
                <div className="ppl-cgpu mt-5">
                    <div className="page-head">People Behind CGPU</div>
                    <div className=" ali">
                        <div className="padd-right">
                            <h4 className="blue mt-4 mb-2">Coordinator</h4>
                            <div className="cards-container">
                                {head.map((item, key) => {
                                    return (
                                        <div key={key} className="card-item">
                                            <div className="card-overlay" />
                                            <img src={item.img} className="card-img" alt={item.title} />
                                            <div className="card-blank" />
                                            <div className="card-text">
                                                <div className="card-title">{item.title}</div>
                                                <div className="card-subtitle">{item.posi}</div>
                                                <a href={`mailto:${item.mail}`} className="card-mail">
                                                    {item.mail}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="ali-left">
                            <h4 className="blue mt-4 mb-2">Associated Faculty</h4>
                            <div className="cards-container">
                                {faculty.map((item, key) => {
                                    return (
                                        <div key={key} className="card-item">
                                            <div className="card-overlay" />
                                            <img src={item.img} className="card-img" alt={item.title} />
                                            <div className="card-blank" />
                                            <div className="card-text">
                                                <div className="card-title">{item.title}</div>
                                                <div className="card-subtitle">{item.posi}</div>
                                                <a href={`mailto:${item.mail}`} className="card-mail text-truncate">
                                                    {item.mail}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <h4 className="blue mt-4 mb-2">Student Representatives</h4>
                    {/* <div className="cards-main row p-0"> */}
                    <div className="cards-container">
                        {repsToggle.map((item, key) => {
                            // return (
                            //     <div key={key} className="cards-each col-12 col-sm-6 col-md-4 col-xl-3">
                            //         <div className="cards-in">
                            //             <div className="img-bg">
                            //                 <img src={item.img} className="rep-img" alt={item.title} />
                            //             </div>
                            //             <div className="text-box">
                            //                 <div className="item-name">{item.title}</div>
                            //                 <div className="item-pos">{item.posi}</div>
                            //                 {/* <a href={`mailto:${item.mail}`} className="item-mail">
                            //                     {item.mail}
                            //                 </a> */}
                            //             </div>
                            //         </div>
                            //     </div>
                            // );
                            return (
                                <div key={key} className="card-item">
                                    <div className="card-img" />

                                    <div className="card-overlay" />
                                    <img src={item.img} className="card-img" alt={item.title} />
                                    <div className="card-blank" />
                                    <div className="card-text rep">
                                        <div className="card-title">{item.title}</div>
                                        <div className="card-subtitle">{item.posi}</div>
                                        {/* <a href={`mailto:${item.mail}`} className="card-mail text-truncate">
                                            {item.mail}
                                        </a> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className={`more-btn${more ? " d-none" : ""}`} onClick={() => setMore(!more)}>
                        Show more
                    </button>
                </div>
            </div>
        </Layout>
    );
}
