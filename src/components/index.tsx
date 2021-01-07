import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';

import { DefaultButton, PrimaryButton, Customizer, getTheme, DefaultEffects } from '@fluentui/react'

import NavBar from './nav';
import { SidebarPanel } from './sidepanel';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });
const theme = getTheme();
const sidebarContext = React.createContext(() => { });

ReactDOM.render(
    <div className='ms-Grid' dir='ltr'>
        <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-sm12 row1'>
                <NavBar userName="king"></NavBar>
            </div>
        </div>
        <SidebarPanel></SidebarPanel>
    </div>, document.getElementById("rrlpoc")
)