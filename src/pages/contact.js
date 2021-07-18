import React from "react";
import Layout from "../components/layout";
import "../styles/contact.css";
export default function Contact() {
    return (
        <Layout>
            <div>
            <div className="contact-main">
                <div className='page-head'>Contact Us</div>
                <div className="row main p-6">
                    
                        <div className="col-5 address">
                            <h4>Address</h4>
                           
                            <p className="p-main">Career Guidance and Placement Unit (CGPU),<br/>
                            College of Engineering Trivandrum,<br/>
                           Engineering College P.O., Sreekaryam,<br/>
                                Thiruvananthapuram, Kerala 695016</p>
                            <p>
                                Phone :<span className="phone"> 0471 2595152, 2515682</span><br />
                                Email :<span className="phone">placement@cet.ac.in</span> 
                            </p>
                            
                    </div>
                        <div className="col-5 contac">
                            <h4>Contact Person</h4>
                           
                            <p className="p-main"> Dr. K. Sunil Kumar<br/>
                               Training and Placement Officer<br/>
                                College of Engineering Trivandrum,<br />
                                Thiruvananthapuram, Kerala 695016<br />
                                </p>
                            <p>
                                Mobile :<span className="phone"> 9946844277</span><br />
                                Email :<span className="phone">placement@cet.ac.in</span> 
                            </p>
                            
                    </div>
                   
                </div>
                <div className="reach">Reach our institution</div>
                <div className="map">google map</div>
                </div>
                
                </div>
        </Layout>
    );
}
