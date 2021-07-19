import React from "react";
import { Link } from "gatsby";
import logo from "../images/cet-logo-white.png";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className='footer-container d-flex'>
                <div>
                    <h2>
                        <span>cgpu</span>
                        <span>cet</span>
                    </h2>
                    <img src={logo} alt='CET Seal' className='py-3' />
                </div>
                <ul>
                    <div>
                        <h6>Learn More</h6>
                        <Link to='/about-cgpu'>About CGPU</Link>
                        <Link to='/about-cet'>About CET</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/placement'>Placement</Link>
                        <Link to='/recruiters'>Recruiters</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                    <div>
                        <h6>Useful Links</h6>
                        <a className='App-link' href='https://ktu.edu.in/' target='_blank' rel='noopener noreferrer'>
                            Kerala Technological University
                        </a>
                        <a className='App-link' href='https://www.cet.ac.in/' target='_blank' rel='noopener noreferrer'>
                            College of Engineering Trivandrum
                        </a>
                        <a
                            className='App-link'
                            href='https://alumni.cet.ac.in/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            CET Alumni Association
                        </a>
                    </div>
                    <div className='contact'>
                        <h6>Contact Us</h6>
                        <div className='footer-adr mb-3'>
                            Career Guidance and Placement Unit (CGPU), <br />
                            College of Engineering, Sreekaryam, <br />
                            Thiruvananthapuram, Kerala 695016
                        </div>
                        <div>
                            <span>Phone: </span>
                            <a href='tel:9946844277'>+91 994-684-4277</a> |{" "}
                            <a href='tel:9946844277'>+91 994-684-4277</a>
                            <span> (Office)</span>
                        </div>
                        <div>
                            <span>Email: </span>
                            <a href='mailto:placement@cet.ac.in'>placement@cet.ac.in</a>
                        </div>
                    </div>
                </ul>
            </div>
            <hr color='white' />
            <p className='text-center'>&copy; 2021 College of Engineering Trivandrum. All Rights Reserved.</p>
        </footer>
    );
}
