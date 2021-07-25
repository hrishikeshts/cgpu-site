import React from "react";
import Layout from "../components/layout";
import { Line } from "react-chartjs-2";
import "../styles/placement.css";

const data = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
        {
            label: "# of Placements",
            data: [604, 591, 1020, 606, 715, 840],
            fill: false,
            backgroundColor: "#FFF",
            borderColor: "#1F7AE0",
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

export default function Placement() {
    return (
        <Layout page="placement">
            <div className="main-container">
                <div className="align-self-start head-desc-main">
                    <div className="page-head">Placement Highlights</div>
                    <div className="head-desc">
                        <span>
                            CET is one of the few colleges in Kerala who has witnessed excellent placement records in
                            the past years.{" "}
                        </span>
                        <span className="d-lg-block">
                            Here is the placement statistics of the total number of offers made in the last 6 years.
                        </span>
                    </div>
                </div>
                <div className="chart-container">
                    <Line data={data} options={options} />
                </div>
                <div className="table-tagline">
                    Our placement records for the year <span className="placement-year">2020</span>
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
                                {[...new Array(14)].map((_, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>ABB</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
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
