import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import "../assets/styles/style.css";
import { DefaultButton, PrimaryButton, Customizer, getTheme, DefaultEffects } from '@fluentui/react'

import NavBar from './nav';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const theme = getTheme();

ReactDOM.render(
    <div className='ms-Grid' dir='ltr'>
        <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-sm12 row1'>
                <NavBar></NavBar>
            </div>
        </div>
    </div>, document.getElementById("rrlpoc")
)