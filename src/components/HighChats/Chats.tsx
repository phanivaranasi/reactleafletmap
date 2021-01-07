
import * as React from "react";
import * as ReactDOM from "react-dom";
// import * as Highcharts from "highcharts";
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { DefaultButton, PrimaryButton, Customizer, getTheme, DefaultEffects } from '@fluentui/react';

// import Demo from './demo';

import Common from './common';

const LineChart = (props: HighchartsReact.Props) =>
 <div className='ms-Grid' dir='ltr'>
     <div className='ms-Grid-row'>
     <div className='ms-Grid-col ms-sm2 row1'>
        <Common chartname='line'></Common>
     </div>
     <div className='ms-Grid-col ms-sm2 row1'>
        <Common chartname='bar'></Common>
     </div>
     <div className='ms-Grid-col ms-sm2 row1'>
        <Common chartname='column'></Common>
     </div>
     <div className='ms-Grid-col ms-sm2 row1'>
        <Common chartname='pie'></Common>
     </div>
     <div className='ms-Grid-col ms-sm2 row1'>
        <Common chartname='area'></Common>
     </div>
     <div className='ms-Grid-col ms-sm2 row1'>
        <Common chartname='scatter'></Common>
     </div>
     </div>
</div>

export default LineChart;