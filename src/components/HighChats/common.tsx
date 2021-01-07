
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import { DefaultButton, PrimaryButton, Customizer, getTheme, DefaultEffects } from '@fluentui/react'

interface chartType{
    chartname:string;
}

export default class Common extends React.Component<chartType,any> {
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
              name:'close',
            type:this.props.chartname,
            data: [1,2,3]
          },{
            name:'Open',
            type:this.props.chartname,
            data: [1,4,2]
          }]
        }
      }
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