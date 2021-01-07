import * as React from "react";
import { Pivot, PivotItem, IPivotItemProps, Label, IStyleSet, ILabelStyles, Icon, initializeIcons, DefaultButton } from '@fluentui/react';
import MapsComp from './maps';

import { messageService } from './services';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
};
initializeIcons();

interface NavBarProps {
    userName: string;
}
interface NavBarState {
    userEmail: string;
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {


    constructor(props: NavBarProps) {
        super(props);
        this.state = {
            userEmail: ''
        }
        console.log(props.userName);


    }
    componentDidMount() {
        this.setState({ userEmail: 'sate info' })
    }

    showSidebar() {
        console.log("***** OPENING SIDE BAR *****");
        messageService.openSidebar({ openSidebar: true });
    }

    render() {
        return (
            <div>
                <Pivot aria-label="Count and Icon Pivot Example">
                    <PivotItem headerText="Maps" itemIcon="Emoji2">
                        <MapsComp></MapsComp>
                    </PivotItem>
                    <PivotItem headerText="Sidebar" itemIcon="Emoji2">
                        <DefaultButton text="Open Sidebar" onClick={this.showSidebar}></DefaultButton>
                    </PivotItem>
                    <PivotItem headerText="Placeholder" itemIcon="Globe">
                        <Label styles={labelStyles}>Pivot #3</Label>
                    </PivotItem>
                    <PivotItem headerText="Shared with me" itemIcon="Ringer" itemCount={1}>
                        <Label styles={labelStyles}>Pivot #4</Label>
                    </PivotItem>
                    <PivotItem headerText="Customized Rendering" itemIcon="Globe" itemCount={10} onRenderItemLink={_customRenderer}>
                        <Label styles={labelStyles}>Customized Rendering</Label>
                    </PivotItem>
                </Pivot>
            </div>
        )
    }
}

function _customRenderer(link: IPivotItemProps, defaultRenderer: (link: IPivotItemProps) => JSX.Element): JSX.Element {
    return (
        <span>
            {defaultRenderer(link)}
            <Icon iconName="Airplane" style={{ color: 'red' }} />
        </span>
    );
}