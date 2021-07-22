import React from 'react';
import {objectives} from './data'
import '../styles/index.css'

const Objectives = () => {
    return (
        <div style={{paddingLeft:"1.5%"}}>
            <div className="midheading" style={{ margin: "auto" }}>
                    Our Objectives
            </div>
            <div className="row">
              {objectives.map(x=><div className='col-3 my-3'>
                  <div className="objectives">
                    <div className='objectives-title'>{x.title}</div>
                    <div className='objectives-content'>{x.content}</div>
                  </div>
              </div>)}
            </div>
        </div>
    );
}



export default Objectives;