import React from 'react';
import missioncircle from "../images/mission.png";
import eye from "../images/Asseteye.png";

const ThingsVal = () => {
    return (
        <div>
            <div className="midheading">Things Which We Value</div>
                <div className="vm">
                    <div className=" row vision py-3 ">
                        <div className="col-2">
                            <div className="bluelayer">
                                <img src={eye} className="eye" />
                            </div>
                        </div>
                        <div className="col-7">
                            <h3>Our Vision</h3>
                            <div className="text">
                                National Level Excellence and International Visibility in Every Facet of Engineering
                                Research and Education.
                            </div>
                        </div>
                    </div>
                    <div className=" row mission px-3 py-3 my-3">
                        <div className="col-10 missionpara">
                            <h3>Our Mission</h3>
                            <div className="text">
                                To facilitate quality transformative education in Engineering and Management. To foster
                                innovations in Technology and its application for meeting global challenges. To pursue
                                and disseminate Quality Research. To equip, enrich and transform students to be
                                Responsible Professionals for better service to humanity.
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="bluelayer">
                                <img src={missioncircle} className="eye" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default ThingsVal;