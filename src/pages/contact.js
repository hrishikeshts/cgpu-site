import React from "react";
import Layout from "../components/layout";
import "../styles/contact.css";
export default function Contact() {
    return (
        <Layout>
            <div>
            <div className="contact-main">
                <div className='page-head'>Contact Us</div>
                <div className="row main">
                    
                    <div className="col-6 address">address</div>
                    <div className="col-6 contac">contact</div>
                   
                </div>
                <div className="reach">reach our institution</div>
                <div className="map">google map</div>
                </div>
                <div className="brochure">To know more about the college and placement details, please check out our brochure</div>
                </div>
        </Layout>
    );
}
