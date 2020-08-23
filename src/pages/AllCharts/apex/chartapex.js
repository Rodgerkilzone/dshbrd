import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class chartapex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        { name: 'USSD Transactions', data: [26, 24, 32, 36, 33, 31, 33] },
        { name: 'Whatsapp Transactions', data: [14, 11, 16, 12, 17, 13, 12] },
      ],
      options: {
        chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
        colors: ['#303669', '#34c38f'],
        dataLabels: { enabled: !0 },
        stroke: { width: [3, 3], curve: 'straight' },
        title: {
          text: 'Total USSD & Whatsapp interactions',
          align: 'left',
          style: { fontWeight: 'normal', fill: '#373d3f', opacity: 1 },
        },
        grid: {
          row: { colors: ['transparent', 'transparent'], opacity: 0.2 },
          borderColor: '#f1f1f1',
        },
        markers: { style: 'inverted', size: 7 },
        xaxis: {
          categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','0'],
          title: { text: 'Time' },
        },
        yaxis: { title: { text: 'No of Transactions' }, min: 0, max: 100 },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: !0,
          offsetY: -25,
          offsetX: -5,
        },
        responsive: [
          {
            breakpoint: 600,
            options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
          },
        ],
      },
    };
  }
  render() {
    return (
      <React.Fragment>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="380"
        />
      </React.Fragment>
    );
  }
}

export default chartapex;
