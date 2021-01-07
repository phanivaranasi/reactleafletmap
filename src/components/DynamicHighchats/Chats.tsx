
import * as React from "react";
import * as ReactDOM from "react-dom";
// import * as Highcharts from "highcharts";
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { DefaultButton, PrimaryButton, Customizer, getTheme, DefaultEffects } from '@fluentui/react';

import CommanChart from './common';

const LineChart = (props: HighchartsReact.Props) =>
 <div className='ms-Grid' dir='ltr'>
     <div className='ms-Grid-row'>
        <div className='ms-Grid-col ms-sm2 row1'>
            <CommanChart chartname='line'></CommanChart>
        </div>
        <div className='ms-Grid-col ms-sm2 row2'>
            <CommanChart chartname='column'></CommanChart>
        </div>
        <div className='ms-Grid-col ms-sm2 row3'>
            <CommanChart chartname='pie'></CommanChart>
        </div>
        <div className='ms-Grid-col ms-sm2 row1'>
            <CommanChart chartname='area'></CommanChart>
        </div>
        <div className='ms-Grid-col ms-sm2 row1'>
            <CommanChart chartname='bar'></CommanChart>
        </div>
        <div className='ms-Grid-col ms-sm2 row1'>
            <CommanChart chartname='scatter'></CommanChart>
        </div>
     </div>    
</div>

export default LineChart;