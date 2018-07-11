import * as React from 'react';
import CalendarCaption from './CalendarCaption';
import CalendarThead from './CalendarThead';
import CalendarTbody from './CalendarTbody';
const DATE_FNS = {
    format: require('date-fns/format'),
    eachDay: require('date-fns/each_day'),
    startDayOfMonth: require('date-fns/start_of_month'),
    lastDayOfMonth: require('date-fns/last_day_of_month'),
};


interface iCalendarProps {
    now_year: number;
    now_month: number;
    day_to_Index: any;
    form_judge: any;
}

interface iCalendarState {
    inst_date_fns: object;
}

export default class Calendar extends React.Component <iCalendarProps, iCalendarState> {
    constructor(props: any){
        super(props);
        this.state = {
            inst_date_fns: new Date(this.props.now_year, this.props.now_month - 1),
        };
    }

    getDayFromTb(i: number) {
        this.props.day_to_Index(i);
    }

    getFormJudge(handle: number) {
        this.props.form_judge(handle);
    }

    getDaysOfMonth(): Array<object> {
        let start_date = this.state.inst_date_fns;
        let end_date = DATE_FNS.lastDayOfMonth(start_date);
        let start_week = DATE_FNS.format(start_date, 'd');
        let end_week = DATE_FNS.format(end_date, 'd');
        let is_days = DATE_FNS.eachDay(start_date, end_date);
        let one_month = [];


        if(start_week !== 0){
            for(let i = 0; i < start_week; i++){
                one_month.push(null);
            }
        }

        for(let j = 0; j < is_days.length; j++){
            one_month.push(is_days[j]);
        }

        if(end_week !== 6){
            for(let k = end_week; k < 6; k++){
                one_month.push(null);
            }
        }

        return one_month;
    }

    render(){
        return(
            <table>
                <CalendarCaption now_year={this.props.now_year} now_month={this.props.now_month}/>
                <CalendarThead />
                <CalendarTbody
                    data_days={this.getDaysOfMonth()}
                    day_to_Calendar={this.getDayFromTb.bind(this)}
                    form_judge={this.getFormJudge.bind(this)}
                />
            </table>
        );
    }
}
