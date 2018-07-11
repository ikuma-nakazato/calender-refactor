import * as React from 'react';
import CalendarTd from './CalendarTd';
const DATE_FNS = {
    format: require('date-fns/format'),
};


interface iCalendarTbodyProps {
    data_days: Array<object>;
    day_to_Calendar: any;
    form_judge: any;
}

interface iCalendarTbodyState {
}

export default class CalendarTbody extends React.Component <iCalendarTbodyProps, iCalendarTbodyState>{
    constructor(props: any){
        super(props);
    }

    getDayFromCTd(i: number) {
        this.props.day_to_Calendar(i);
    }

    getFormJudge(handle: number) {
        this.props.form_judge(handle);
    }

    displayAllDays(): Array<any> {
        let refs = 0;
        let one_week = [];

        let rendered_days = this.props.data_days.map((data) => {
            if(data === null){
                return <CalendarTd
                    day={null}
                    day_to_CTb={this.getDayFromCTd.bind(this)}
                    form_judge={this.getFormJudge.bind(this)}
                />
            }else{
                return <CalendarTd
                    day={DATE_FNS.format(data, 'D')}
                    day_to_CTb={this.getDayFromCTd.bind(this)}
                    form_judge={this.getFormJudge.bind(this)}
                />
            }
        })

        for(let i = 0; i < 5; i++){
            one_week.push(rendered_days.slice(refs, refs + 7));
            refs += 7;
        }

        return one_week.map((data) => {
            return <tr>{data}</tr>
        })
    }

    render(){
        return(
            <tbody>
                {this.displayAllDays()}
            </tbody>
        );
    }
}