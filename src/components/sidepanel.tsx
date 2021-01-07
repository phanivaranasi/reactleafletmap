import * as React from "react";
import { Panel } from '@fluentui/react';
import { messageService } from './services';


interface SidePanelProps {


}

interface SidePanelState {
    sidebarState: boolean;

}


export class SidebarPanel extends React.Component<{}, SidePanelState>
{
    constructor(props: SidebarPanel) {
        super(props);
        this.state = {
            sidebarState: false
        }
        messageService.getSidebar().subscribe(res => {
            console.log('***** Side Panel *****', res);
            this.setState({ sidebarState: true })
        });
    }



    dismissPanel = () => {
        this.setState({ sidebarState: false })
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Panel
                    headerText="Sample panel"
                    isOpen={this.state.sidebarState}
                    isBlocking={false}
                    onDismiss={this.dismissPanel}
                    allowTouchBodyScroll={true}
                    // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                    closeButtonAriaLabel="Close"
                >
                    <p>Content goes here.</p>
                </Panel>
            </div>
        )
    }
}
