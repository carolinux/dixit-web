import React, {useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//import soundfile from '../../public/resources/sounds'
import Sound from 'react-sound'


const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Score of this game'
  },
 /* xAxis: {
    categories: ['Jane', 'John', 'Joe'],
    title: {
      text: null
    }
  },*/
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
    data: [30]
  }, {
    type: 'column',
    name: 'Lara',
    data: [20]
  }, {
    type: 'column',
    name: 'Karolina',
    data: [14]
  }
  ],
  credits: {
    enabled: false
  }
};

export default function Winners() {



  return (<div><HighchartsReact highcharts={Highcharts} options={options} />
      <Sound
      url="http://127.0.0.1:3000/resources/sounds/ending.mp3"
      playStatus={Sound.status.PLAYING}
    />
    </div>

  )
}
