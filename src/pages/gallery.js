import React from "react";
import Layout from "../components/layout";
import "../styles/gallery.css";
import coverimage from "../images/cet-front.png";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { photos } from "../components/data";

export default function Gallery() {
    return (
        <Layout page="gallery">
            <div className="gallery-page gallery-main">
                <div className="coverimg">
                    <div className="layer"></div>
                    <div className="layer2">
                        <div className="gal-head">Gallery</div>
                    </div>
                    <img src={coverimage} className="coverphoto"></img>
                    {/* <h1>Gallery</h1> */}
                </div>
                <div className="gal-container">
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                    <Masonry>
                        
                            {photos.map((item)=>{
                                return(
                                    <div className="gal-space">
                                        <img src={`${item.src}`} className="gal-img"></img>
                                    </div>
                                    
                                )
                            })}
                        
                    </Masonry>
                </ResponsiveMasonry>
                </div>
            </div>
        </Layout>
    );
}
