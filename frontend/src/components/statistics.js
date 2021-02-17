import React, {Component} from 'react';
import {Chart} from 'chart.js';
import {Line} from 'react-chartjs-2';

Chart.defaults.global.legend.display = false;

class Statistics extends Component {
    render() {
        const {visualization, mean, median, mode, std} = this.props.response.data;
        const {distribution} = visualization;

        const graphData = {
            labels: Array.from({length: 101}, (_, i) => i/10),
            datasets: [
                {
                    label: "Number of Movies",
                    data: distribution,
                    borderColor: "rgb(255,64,0,0.6)",
                    backgroundColor: "rgb(255,128,64,0.55)",
                }
            ]
        };
        return (
            <ul className="list-group">
                <li className="list-group-item"> <b>Mean: </b> {Math.round(mean*100)/100} </li>
                <li className="list-group-item"> <b>Median: </b> {Math.round(median*100)/100} </li>
                <li className="list-group-item"> <b>Mode: </b> {Math.round(mode*100)/100} </li>
                <li className="list-group-item"> <b>Standard Deviation: </b> {Math.round(std*100)/100} </li>
                <li className="list-group-item">
                    <b>Rating Distribution: </b>
                    <div className="p-5 text-secondary">
                        <Line data={graphData}/>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Statistics;