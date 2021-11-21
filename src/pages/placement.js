import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// import { Line } from 'react-chartjs-2';
import { placements } from "../data/placements";
import down from "../images/down.svg";
import "../styles/placement.css";

export default function Placement({ data: _pData }) {
    // const pData = _pData.allPlacementJson.nodes;
    // const [year, setYear] = useState(pData[0].year);
    // const keyedData = {};
    // pData.map((p) => (keyedData[p.year] = p));

    const [year, setYear] = useState(placements[2].year);
    const keyedData = {};
    placements.map((placement) => (keyedData[placement.year] = placement));

    return (
        <Layout page="placement">
            <div className="main-container">
                <div className="align-self-start head-desc-main">
                    <div className="page-head">Placement Highlights</div>
                    <div className="head-desc">
                        <span>
                            CET is one of the few colleges in Kerala which has witnessed excellent placement records in
                            the last 3 years.{" "}
                        </span>
                        <span className="d-lg-block">
                            Here is the placement statistics of the total number of offers made in the last 3 years.
                        </span>
                    </div>
                </div>
                {/* <div className="chart-container">
                    <Line data={data} options={options} />
                </div> */}
                <div className="table-tagline mt-2 pt-4 pb-3 pb-sm-4 mt-lg-4 mb-lg-2 py-lg-4">
                    <span>Our placement records for the year</span>
                    <span className="dropdown mx-auto">
                        <button
                            className="btn dropdown-toggle dropdown-toggle-split placement-year mx-2 p-0"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {year} <img src={down} alt="Dropdown" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            {/* {pData.map((label, key) => { */}
                            {placements.map((placement, key) => {
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setYear(placement.year)}
                                        className={`btn${year === placement.year ? " active" : " "}`}
                                    >
                                        {placement.year}
                                    </button>
                                );
                            })}
                        </ul>
                    </span>
                </div>
                <div className="w-100 table-responsive mb-4 mb-md-0">
                    <div>
                        <table className="table table-striped placement-table m-0">
                            <thead>
                                <tr>
                                    {/* <th scope="col">#</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">AE</th>
                                    <th scope="col">CE</th>
                                    <th scope="col">CS</th>
                                    <th scope="col">EC</th>
                                    <th scope="col">EE</th>
                                    <th scope="col">IE</th>
                                    <th scope="col">ME</th>
                                    <th scope="col">MCA</th>
                                    <th scope="col">MBA</th>
                                    <th scope="col">Total</th> */}
                                    <th scope="col" className="ps-5">
                                        Branch
                                    </th>
                                    <th scope="col" className="pe-5">
                                        Total Offers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {keyedData[year].companies.map((company, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{company.name}</td>
                                        <td>{company.stats.AE || 0}</td>
                                        <td>{company.stats.CE || 0}</td>
                                        <td>{company.stats.CS || 0}</td>
                                        <td>{company.stats.EC || 0}</td>
                                        <td>{company.stats.EE || 0}</td>
                                        <td>{company.stats.IE || 0}</td>
                                        <td>{company.stats.ME || 0}</td>
                                        <td>{company.stats.MCA || 0}</td>
                                        <td>{company.stats.MBA || 0}</td>
                                        <td>{Object.values(company.stats).reduce((a, b) => a + b)}</td>
                                    </tr>
                                ))} */}
                                {keyedData[year].data.map((data, key) => (
                                    <tr key={key}>
                                        <td className="ps-5">{data.branch}</td>
                                        <td className="pe-5">{data.offers}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// export const query = graphql`
//     query MyQuery {
//         allPlacementJson {
//             nodes {
//                 year
//                 companies {
//                     name
//                     stats {
//                         AE
//                         CE
//                         CS
//                         EC
//                         EEE
//                         IE
//                         MBA
//                         MCA
//                         ME
//                     }
//                 }
//             }
//         }
//     }
// `;
