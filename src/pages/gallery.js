import React from "react";
import Layout from "../components/layout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../styles/gallery.css";
import { gallery } from "../data/gallery";
// import coverimage from "../images/cet-cover.png";

export default function Gallery() {
    return (
        <Layout page="gallery">
            <div className="main-container mb-4 mb-md-0">
                <div className="coverimg">
                    <div className="gal-head m-auto ms-4 ms-md-5 mb-3 mb-md-4">Gallery</div>
                </div>
                <div className="gal-container">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry>
                            {gallery.map((item, key) => {
                                return (
                                    <div key={key} className="gal-space">
                                        <div className="myDIV">
                                            <img src={`${item.src}`} alt="Gallery Item" className="gal-img"></img>
                                            <div className="overlay">
                                                <div className="text-wrap">
                                                    <h4 className="img-desc">{item.desc}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </Layout>
    );
}
