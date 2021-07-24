import React from "react";
import Layout from "../components/layout";
import "../styles/contact.css";
export default function Contact() {
    return (
        <Layout page="contact">
            <div className="main-container mb-4 mb-md-0">
                <div className="align-self-start page-head">Contact Us</div>
                <div className="row w-100 py-2">
                    <div className="col-12 col-md-6 px-0 py-4">
                        <div className="address text-wrap me-md-4 me-lg-5 p-4">
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
                    <div className="col-12 col-md-6 px-0 py-4">
                        <div className="contac ms-md-4 ms-lg-5 p-4">
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
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21079.934509111976!2d76.88899011221132!3d8.545567551093711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum!5e0!3m2!1sen!2sin!4v1627108118045!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowfullscreen=""
                        loading="lazy"
                        title="CET on Google Maps"
                    />
                </div>
            </div>
        </Layout>
    );
}
