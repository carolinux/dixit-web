import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Score of this game'
  },
  xAxis: {
    categories: ['Jane', 'John', 'Joe'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Score'
    },
    labels: {
      overflow: 'justify'
    }
  },
  series: [{
    type: 'column',
    name: 'Jane',
    data: [3, 2, 1]
  }, {
    type: 'column',
    name: 'John',
    data: [2, 3, 5]
  }, {
    type: 'column',
    name: 'Joe',
    data: [4, 3, 3]
  }, {
    type: 'spline',
    name: 'Average',
    data: [3, 2.67, 3]
  }],
  credits: {
    enabled: false
  }
};

export default function Winners() {
  return (<HighchartsReact highcharts={Highcharts} options={options} />)
}
