import * as React from 'react';
import './Calendar.css';
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
    func_setReferDayState: Function;
    func_setFormState: Function;
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

    setReferDayState_sendDay(click_day: number) {
        this.props.func_setReferDayState(click_day);
    }

    setFormState_showForm(is_show: boolean, type: string) {
        this.props.func_setFormState(is_show, type);
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
            <table className="calendar">
                <CalendarCaption now_year={this.props.now_year} now_month={this.props.now_month}/>
                <CalendarThead />
                <CalendarTbody
                    data_one_month={this.getDaysOfMonth()}
                    func_setReferDayState={this.setReferDayState_sendDay.bind(this)}
                    func_setFormState={this.setFormState_showForm.bind(this)}
                />
            </table>
        );
    }
}
