import * as React from 'react';


interface iCalendarCaptionProps {
    now_year: number;
    now_month: number;
}

interface iCalendarCaptionState {
}

export default class CalendarCaption extends React.Component<iCalendarCaptionProps, iCalendarCaptionState> {
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <caption>
                {this.props.now_year}年{this.props.now_month}月
            </caption>
        );
    }
}