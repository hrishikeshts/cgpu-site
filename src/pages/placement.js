import React, { useState } from 'react';
import Layout from '../components/layout';
// import { Line } from 'react-chartjs-2';
import down from '../images/down.svg';
import '../styles/placement.css';
import { graphql } from 'gatsby';

// const data = {
//     labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
//     datasets: [
//         {
//             label: '# of Placements',
//             data: [604, 591, 1020, 606, 715, 840],
//             fill: false,
//             backgroundColor: '#FFF',
//             borderColor: '#1F7AE0',
//         },
//     ],
// };

// const options = {
//     scales: {
//         yAxes: [
//             {
//                 ticks: {
//                     beginAtZero: true,
//                 },
//             },
//         ],
//     },
// };

export default function Placement({ data: _pData }) {
    const pData = _pData.allPlacementJson.nodes;
    const [year, setYear] = useState(pData[0].year);
    const keyedData = {};
    pData.map((p) => (keyedData[p.year] = p));

    return (
        <Layout page="placement">
            <div className="main-container">
                <div className="align-self-start head-desc-main">
                    <div className="page-head">Placement Highlights</div>
                    <div className="head-desc">
                        <span>
                            CET is one of the few colleges in Kerala who has
                            witnessed excellent placement records in the past
                            years.{' '}
                        </span>
                        <span className="d-lg-block">
                            Here is the placement statistics of the total number
                            of offers made in the last 6 years.
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
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            {pData.map((label, key) => {
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setYear(label.year)}
                                        className={`btn${
                                            year === label.year
                                                ? ' active'
                                                : ' '
                                        }`}
                                    >
                                        {label.year}
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
                                    <th scope="col">#</th>
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
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {keyedData[year].companies.map((company, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>
                                            {company.name} ({year})
                                        </td>
                                        <td>{company.stats.AE || 0}</td>
                                        <td>{company.stats.CE || 0}</td>
                                        <td>{company.stats.CS || 0}</td>
                                        <td>{company.stats.EC || 0}</td>
                                        <td>{company.stats.EE || 0}</td>
                                        <td>{company.stats.IE || 0}</td>
                                        <td>{company.stats.ME || 0}</td>
                                        <td>{company.stats.MCA || 0}</td>
                                        <td>{company.stats.MBA || 0}</td>
                                        <td>
                                            {Object.values(
                                                company.stats,
                                            ).reduce((a, b) => a + b)}
                                        </td>
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

export const query = graphql`
    query MyQuery {
        allPlacementJson {
            nodes {
                year
                companies {
                    name
                    stats {
                        AE
                        CE
                        CS
                        EC
                        EEE
                        IE
                        MBA
                        MCA
                        ME
                    }
                }
            }
        }
    }
`;
