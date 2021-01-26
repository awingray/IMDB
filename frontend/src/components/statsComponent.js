import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class StatsComponent extends Component {
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
            <React.Fragment>
                <div className="p-5 d-flex flex-md-row flex-column justify-content-between text-center text-secondary">
                    <p>{'Mean: ' + Math.round(mean*100)/100 }</p>
                    <p> {'Median: ' + Math.round(median*100)/100} </p>
                    <p> {'Mode: ' + Math.round(mode*100)/100} </p>
                    <p> {'Standard Deviation: ' + Math.round(std*100)/100} </p>
                </div>
                <div className="p-5 text-secondary">
                    <Line data={graphData}/>
                </div>
            </React.Fragment>
        );
    }
}

export default StatsComponent;