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
}

interface iCalendarState {
    inst_date_fns: object;
}

export default class Calendar extends React.Component <iCalendarProps, iCalendarState> {
    constructor(props: any){
        super(props);
        /*クエリを保証する条件式を書く*/
        if(1) {
            let y_query = 2018;
            let m_query = 5;

            this.state = {
                inst_date_fns: new Date(y_query, m_query - 1)
            };
        }else{
            console.log("異常発生");
            /*処理を止める処理を書く*/
        }

    }

    getDaysOfMonth(): Array<object> {
        let start_date = this.state.inst_date_fns;
        let end_date = DATE_FNS.lastDayOfMonth(start_date);
        let start_week = DATE_FNS.format(start_date, 'd');
        let end_week = DATE_FNS.format(end_date, 'd');

        let month_data = new Array();

        if(start_week !== 0){
            for(let i = 0; i < start_week; i++){
                month_data.push(null);
            }
        }

        month_data.push(DATE_FNS.eachDay(start_date, end_date));

        if(end_week !== 6){
            for(let j = end_week + 1; j < 7; j++){
                month_data.push(null);
            }
        }

        return month_data;
    }

    render(){
        return(
            <div>
                <table>
                    <CalendarCaption />
                    <CalendarThead />
                    <CalendarTbody />
                </table>
            </div>
        );
    }
}
