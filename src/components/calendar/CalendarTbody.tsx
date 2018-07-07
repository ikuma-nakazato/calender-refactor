import * as React from 'react';
import CalendarTd from './CalendarTd';


interface iCalendarProps {

}

export default class CalendarTbody extends React.Component <iCalendarProps>{
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <tbody>
                <CalendarTd />
            </tbody>
        );
    }
}