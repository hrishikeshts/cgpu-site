import { recruitData } from "../components/data";
import Marquee from "react-fast-marquee";
import React from "react";
import "../styles/major.css";
const Major = () => {
    var first = recruitData.slice(0, 7);
    var second = recruitData.slice(7)
    return <div className="major">
        <div className="majortext">Our Major Recruiters</div>
        <Marquee>
         {first.map((item) => {
                        return (
                            <div className="logo-card">
                                <img className="imageclass"  src={ item.logo}/>
                               
                            </div>
                        );
                    })}
        </Marquee>
        <Marquee direction="right">
         {second.map((item) => {
                        return (
                           <div className="logo-card">
                                <img src={ item.logo}/>
                              </div>
                        );
                    })}
       </Marquee>
</div>
}
export default Major;