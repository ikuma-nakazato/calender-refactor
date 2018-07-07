import * as React from "react";


export default class CalendarThead extends React.Component {
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <div>
                <thead>
                    <tr>
                        <th>日</th>
                        <th>月</th>
                        <th>火</th>
                        <th>水</th>
                        <th>木</th>
                        <th>金</th>
                        <th>土</th>
                    </tr>
                </thead>
            </div>
        );
    }
}