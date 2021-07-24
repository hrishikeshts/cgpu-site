import React from "react";
import { objectives } from "./data";
import "../styles/index.css";

const Objectives = () => {
    return (
        <div>
            <div className="page-head text-center mb-4">Our Objectives</div>
            <div className="row">
                {objectives.map((x, key) => (
                    <div key={key} className="obj-main col-12 col-sm-6 col-md-4 col-xl-3 my-3">
                        <div className="objectives mx-auto">
                            <div className="objectives-title">{x.title}</div>
                            <div className="objectives-content">{x.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Objectives;
