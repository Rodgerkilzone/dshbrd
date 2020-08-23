import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {

    render() {
        const data = {
            labels: [
                "Complete Transactions",
                "Incomplete Transactions"
            ],
            datasets: [
                {
                    data: [300, 180],
                    backgroundColor: [
                        "#303669",
                        "#ebeff2"
                    ],
                    hoverBackgroundColor: [
                        "#3a88ec",
                        "#ebeff2"
                    ],
                    hoverBorderColor: "#fff"
                }]
        };

        return (
            <React.Fragment>
                <Pie width={474} height={285} data={data} />
            </React.Fragment>
        );
    }
}

export default PieChart;   