import * as React from 'react';

interface iCalendarDayProps {

}

interface iCalendarDayState {
    date: string;
    task_list: Array<string>;
}


export default class CalendarTd extends React.Component <iCalendarDayProps, iCalendarDayState> {
    constructor(props: any){
        super(props);
        this.state = {
            date: 'hogehoge',
            task_list: ['fugafuga']
        }
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}