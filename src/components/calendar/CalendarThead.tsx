import * as React from "react";
import './CalendarThead.css';

export default class CalendarThead extends React.Component {
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <thead className="calendar_thead">
                <tr>
                    <th className="calendar_thead-sunday">日</th>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                    <th className="calendar_thead-saturday">土</th>
                </tr>
            </thead>
        );
    }
}