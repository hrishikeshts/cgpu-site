import React from "react";
import { Link } from "gatsby";
import logo from "../images/cet-logo-white.png";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container row justify-content-between pt-3 pt-md-0">
                <ul className="order-md-2 col-md-10 row mb-2">
                    <div className="col-6 col-sm-2 col-md-3 col-lg-2 py-2">
                        <h6 className="pb-3">Learn More</h6>
                        <Link to="/about-cgpu">About CGPU</Link>
                        <Link to="/about-cet">About CET</Link>
                        <Link to="/recruiters">Recruiters</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 py-2">
                        <h6 className="pb-3">Useful Links</h6>
                        <a href="https://ktu.edu.in/" target="_blank" rel="noopener noreferrer">
                            Kerala Technological University
                        </a>
                        <a href="https://www.cet.ac.in/" target="_blank" rel="noopener noreferrer">
                            College of Engineering Trivandrum
                        </a>
                        <a href="https://alumni.cet.ac.in/" target="_blank" rel="noopener noreferrer">
                            CET Alumni Association
                        </a>
                    </div>
                    <div className="contact col-12 col-sm-6 col-md-5 col-lg-6 py-2">
                        <h6 className="pb-3">Contact Us</h6>
                        <div className="footer-adr mb-3">
                            Career Guidance and Placement Unit (CGPU), <br />
                            College of Engineering Trivandrum (CET), Sreekaryam, Thiruvananthapuram, Kerala 695016
                        </div>
                        <div>
                            <span>Phone: </span>
                            <a href="tel:9946844277">+91 994-684-4277</a> |{" "}
                            <a href="tel:9946844277">+91 994-684-4277</a>
                            <span> (Office)</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <a href="mailto:placement@cet.ac.in">placement@cet.ac.in</a>
                        </div>
                    </div>
                </ul>
                <div className="order-md-1 text-center text-md-start col-12 col-md-2">
                    <hr color="white" className="d-md-none" />
                    <h2 className="py-2 py-md-0">
                        <span>cgpu</span>
                        <span>cet</span>
                    </h2>
                    <img src={logo} alt="CET Seal" className="py-md-3" />
                </div>
            </div>
            <hr color="white" className="d-none d-md-block" />
            <p className="text-center mt-3">&copy; 2021 College of Engineering Trivandrum. All Rights Reserved.</p>
        </footer>
    );
}
