import * as React from "react";
import * as leaf from 'leaflet';
declare var require: any;
declare let L: any;
require('leaflet-routing-machine');



export default class MapsComp extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        var mymap = leaf.map('mapid').setView([-31.2532, 146.9211], 7);
        leaf.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            subdomains: ['a', 'b', 'c']
        }).addTo(mymap);
    }


    render() {

        return (

            <div>
                <div id="mapid" style={{ width: '100% !important' }}></div>
            </div >
        )
    }
}