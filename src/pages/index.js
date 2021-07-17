import React from "react";
import Layout from "../components/layout";
import logo from "../images/cet-logo.png";

export default function Home() {
    return (
        <Layout>
            <div className='page-head'>Career Guidance and Placement Unit, College of Engineering Trivandrum</div>
            <img src={logo} alt='CET Seal' className='py-3' />
        </Layout>
    );
}
