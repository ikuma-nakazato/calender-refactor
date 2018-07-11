import * as React from 'react';


interface iCalendarTdProps {
    day: number | null;
    day_to_CTb: any;
    form_judge: any;
}

interface iCalendarTdState {
}

export default class CalendarTd extends React.Component <iCalendarTdProps, iCalendarTdState> {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <td onClick={() => this.props.day_to_CTb(this.props.day)}>
                <div onClick={() => this.props.form_judge(1)}>
                    {this.props.day}
                </div>
                <div>
                </div>
            </td>
        );
    }
}