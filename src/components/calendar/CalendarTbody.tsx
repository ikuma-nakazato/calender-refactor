import * as React from 'react';
import CalendarTd from './CalendarTd';
const DATE_FNS = {
    format: require('date-fns/format'),
};


interface iCalendarTbodyProps {
    data_one_month: Array<object>;
    func_setReferDayState: Function;
    func_setFormState: Function;
}

interface iCalendarTbodyState {
    test_list: Array<{day: number; task: string}>;
}

export default class CalendarTbody extends React.Component <iCalendarTbodyProps, iCalendarTbodyState>{
    constructor(props: any){
        super(props);
        this.state = {
            test_list: [
                {day: 5, task: 'test'},
                {day: 5, task: 'test'},
                {day: 13, task: 'test'},
                {day: 17, task: 'test'},
                {day: 21, task: 'test'},
            ]
        };
        this.extractTask = this.extractTask.bind(this);
    }

    setReferDayState_sendDay(click_day: number){
        this.props.func_setReferDayState(click_day);
    }

    setFormState_showForm(is_show: boolean, type: string) {
        this.props.func_setFormState(is_show, type);
    }

    displayAllDays(): Array<any> {
        let refs = 0;
        let one_week = [];

        let rendered_days = this.props.data_one_month.map((data) => {
            if(data === null){
                return <CalendarTd
                    data_day={null}
                    task_list={null}
                    func_setReferDayState={this.setReferDayState_sendDay.bind(this)}
                    func_setFormState={this.setFormState_showForm.bind(this)}
                />
            }else{
                return <CalendarTd
                    data_day={DATE_FNS.format(data, 'D')}
                    task_list={this.extractTask(Number(DATE_FNS.format(data, 'D')))}
                    func_setReferDayState={this.setReferDayState_sendDay.bind(this)}
                    func_setFormState={this.setFormState_showForm.bind(this)}
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

    extractTask(specific_day: number): Array<string> {
        let task_list = [];
        for(let i = 0; i < this.state.test_list.length; i++){
            if(this.state.test_list[i].day === specific_day){
                task_list.push(this.state.test_list[i].task);
            }
        }
        return task_list;
    }


    render(){
        return(
            <tbody>
                {this.displayAllDays()}
            </tbody>
        );
    }
}