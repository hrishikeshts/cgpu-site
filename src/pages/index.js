import React from "react";
import Layout from "../components/layout";
import "../styles/index.css";
import logo from "../images/cet-logo.png";

export default function Home() {
  return (
    <Layout>
      {/* <div className='page-head'>Career Guidance and Placement Unit, College of Engineering Trivandrum</div>
            <img src={logo} alt='CET Seal' className='py-3' /> */}

      <div className="homepage">
        <div className="row firstabt">
          <div className="col-6 my-4">
            <div className="page-head">
              <img src={logo} alt="CET Seal" className="py-3" />
              <br />
              Career Guidance and <br />
              Placement Unit, College of
              <br />
              Engineering Trivandrum
            </div>
            <div className="desc">
              We at CET believe in combining the three facets that together
              spell success. Ability, Motivation and Attitude. CET's placement
              process aims to match the requirements of recruiters and the
              aspirations of students.
              <br />
              <br />
              <button className="learnbtn">Learn more</button>
              <span className="dwnld">
                <b>Download Brochure</b>
              </span>
            </div>
          </div>
          <div className="col-6">
            {/* <div className="img-box-blue">
              <div className="img-box-blue-in"></div>
            </div>
            <div className="img-box-white">
              <div className="img-box-in-gray"></div>
            </div>
            <div className="img-box-green"></div> */}
          </div>
        </div>
        <div className="bluebox">
          In last 5 years, we helped
          <b>
            <span className="bigno"> 4506+</span> students
          </b>{" "}
          be placed in
          <b>
            <span className="bigno"> 245+</span> companies{" "}
          </b>
          at an average salary of{" "}
          <b>
            <span className="bigno">₹9.6 </span>lpa
          </b>
        </div>
      </div>
    </Layout>
  );
}
