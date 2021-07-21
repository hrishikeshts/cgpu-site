import React from "react";
import Layout from "../components/layout";
import "../styles/contact.css";
export default function Contact() {
    return (
        <Layout page="contact">
            <div>
                <div className="contact-main">
                    <div className="page-head">Contact Us</div>
                    <div className="row main p-6">
                        <div className="col-xl-6 col-sm-12">
                            <div className="address text-wrap">
                                <h4>Address</h4>

                                <p className="p-main">
                                    Career Guidance and Placement Unit (CGPU),
                                    <br />
                                    College of Engineering Trivandrum,
                                    <br />
                                    Engineering College P.O., Sreekaryam,
                                    <br />
                                    Thiruvananthapuram, Kerala 695016
                                </p>
                                <p>
                                    Phone:{" "}
                                    <a href="tel:04712595152" className="phone">
                                        0471 2595152
                                    </a>
                                    ,{" "}
                                    <a href="tel:04712515682" className="phone">
                                        2515682
                                    </a>
                                    <br />
                                    Email:{" "}
                                    <a href="mailto:placement@cet.ac.in" className="phone">
                                        placement@cet.ac.in
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-12">
                            <div className=" contac">
                                <h4>Contact Person</h4>

                                <p className="p-main">
                                    {" "}
                                    Dr. K. Sunil Kumar
                                    <br />
                                    Training and Placement Officer
                                    <br />
                                    College of Engineering Trivandrum,
                                    <br />
                                    Thiruvananthapuram, Kerala 695016
                                    <br />
                                </p>
                                <p>
                                    Mobile:{" "}
                                    <a href="tel:9946844277" className="phone">
                                        9946844277
                                    </a>
                                    <br />
                                    Email:{" "}
                                    <a href="mailto:placement@cet.ac.in" className="phone">
                                        placement@cet.ac.in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="reach">Reach our institution</div>
                    <div className="map">google map</div>
                </div>
            </div>
        </Layout>
    );
}
