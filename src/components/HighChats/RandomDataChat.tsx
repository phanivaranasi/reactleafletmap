
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';
import { DefaultButton, PrimaryButton, Customizer, getTheme, DefaultEffects } from '@fluentui/react'

const options: Highcharts.Options = {
    title: {
        text: 'Random Data'
    },
    series: [{
        type: 'line',
        name:'Live Open Tickets',
        data:[3,10,43,13]
        // data: (function() {
        //     // generate an array of random data
        //     var data:any = [],
        //       time = new Date().getTime(),
        //       i:any;

        //     for (i = 0; i < 4; i += 1) {
        //     //   data.push([time + i * 1000, Math.round(Math.random() * 100)]);
        //       data.push([i+1, Math.round(Math.random() * 100)]);
        //     //   data.push(setInterval(function(){[i+1, Math.round(Math.random() * 100)]}),1000);
        //     // setInterval(()=>data.push([i+1, Math.round(Math.random() * 100)]),1000);
        //     setInterval(()=>console.log('Hi'),1000);
        //     }
        //     // console.log(data);
        //     // setInterval(function() {
        //     //     console.log('Hi');
        //     //   }, 1000);
        //     return data;
        //   })()
    }]
}


const BarChat = (props: HighchartsReact.Props) =>
 <div className='ms-Grid' dir='ltr'>
     <div className='ms-Grid-row'>
     <div className='ms-Grid-col ms-sm12 row1'>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            {...props}
        />
        
     </div>
     </div>    
</div>

export default BarChat;