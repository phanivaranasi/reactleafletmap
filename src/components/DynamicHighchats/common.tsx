import * as React from 'react';
import HighchartsReact from 'highcharts-react-official';
// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';

interface chartType{
    chartname:string;
}

export default class Bar extends React.Component<chartType,any> {
  constructor (props:any) {
    super(props)
    this.state = {
      chartOptions: 
      {
        title: {
        text: 'Dynamic '+this.props.chartname+' chart'
        },
        credits: {
          enabled: false
      },
        series: [{
          type:this.props.chartname,
          data: [1,2,3]
        }]
      }
    }
    setInterval(() => this.setState({
        chartOptions: {
          series: [{
            type:this.props.chartname,
            data: [
              Math.random()*10,
              Math.random()*10,
              Math.random()*10
            ]
          }]
        }}
      ), 1000)
  }

  render () {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.chartOptions}
        />
      </div> 
    )
  }
}