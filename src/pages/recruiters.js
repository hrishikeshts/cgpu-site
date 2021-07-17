import React from 'react';
import '../styles/abtcgpu.css'
import '../styles/recruiters.css'
import {recruitData} from './data'

const recruiters = () => {
    return (
        <div className="recruit-main">
            <div className="head-desc-main">
                <div className="abt-head">Our Recruiters</div>
                <div className="head-desc">We have the world's leading companies coming forth to recruit our students. 
                    Register as a recruiter now to participate in our placement drive.
                </div>
            </div>
            <a href="#"><b>Register as a recruiter</b></a>
            <div>
            <div className="r-cards-main row">
                    {recruitData.map((item)=>{
                        return(
                        <div className="r-cards-each col-xl-3 col-md-4 col-sm-12">
                            <div className="r-cards-in">
                                <div className="img-round">
                                    
                                </div>
                                <div className="company-desc">
                                    <div className="item-company">{item.company}</div>
                                    <div className="item-url">{item.url}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}



export default recruiters;