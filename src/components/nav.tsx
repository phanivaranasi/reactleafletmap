import * as React from "react";
import { Pivot, PivotItem, IPivotItemProps, Label, IStyleSet, ILabelStyles,Icon } from '@fluentui/react';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
};
export default class NavBar extends React.Component {



    render() {
        return (
            <div>
                <Pivot aria-label="Count and Icon Pivot Example">
                    <PivotItem headerText="My Files" itemCount={42} itemIcon="Emoji2">
                        <Label styles={labelStyles}>Pivot #1</Label>
                    </PivotItem>
                    <PivotItem itemCount={23} itemIcon="Recent">
                        <Label styles={labelStyles}>Pivot #2</Label>
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