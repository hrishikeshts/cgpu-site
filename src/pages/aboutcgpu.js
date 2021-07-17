import React from 'react';
import '../styles/abtcgpu.css'
import {eventData} from './data'

function aboutcgpu(){
    return (
        <div className="abt-cgpu-main">
            <div className="row abt-sub-1">
                <div className="col-6 my-4">
                    <div className="abt-head">About CGPU</div>
                    <div className="abt-desc">The Career Guidance and Placement Unit (CGPU) was started in this college as 
                        a voluntary organization in January 1984. The Placement Officer who is assisted by 
                        student representatives from all the departments heads this unit. 
                        The Principal of the institution and all other faculty members have 
                        extended their wholehearted support to the functioning of the unit.
                        <br/><br/>The unit is spread over an area of over 3500 sq.ft. 
                        It can accommodate 500 students at a time for written test. It has 
                        an amphitheatre for Pre-Placement Talk. The unit is equipped with a 
                        PA system, OHP, TV, VCR and an LCD projector. Other facilities include 
                        air-conditioned rooms for group discussions and interviews.
                    </div>
                </div>
                <div className="col-6 img-main">
                    <div className="img-box-blue">
                        <div className="img-box-blue-in"></div>
                    </div>
                    <div className="img-box-white">
                        <div className="img-box-in-gray"></div>
                    </div>
                    <div className="img-box-green"></div>
                </div>
            </div>
            <div className="ppl-cgpu">
                <div className="abt-head">People Behind CGPU</div>
                <div className="cards-main row">
                    {eventData.map((item)=>{
                        return(
                        <div className="cards-each col-xl-3 col-md-4 col-sm-12">
                            <div className="cards-in">
                                <div className="img-bg"></div>
                                <div className="text-left mx-3 my-3">
                                    <div className="item-name">{item.title}</div>
                                    <div className="item-pos">{item.posi}</div>
                                    <div className="item-mail">{item.mail}</div>
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


export default aboutcgpu;