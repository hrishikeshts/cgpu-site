import React from "react";
import Layout from "../components/layout";
import "../styles/gallery.css";
import coverimage from "../images/cet-front.png";

export default function Gallery() {
    return (
        <Layout>
            <div className='gallery-page'>
            <div className="coverimg">
                <img src={coverimage} className="coverphoto"></img>
                {/* <h1>Gallery</h1> */}
            </div>
            <div>
                
            </div>
            </div>
        </Layout>
    );
}
