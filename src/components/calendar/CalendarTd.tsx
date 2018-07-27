import * as React from 'react';
import './CalendarTd.css';


interface iCalendarTdProps {
    data_day: number | null;
    task_list: Array<string> | null;
    func_setReferDayState: Function;
    func_setFormState: Function;
}

interface iCalendarTdState {
}

export default class CalendarTd extends React.Component <iCalendarTdProps, iCalendarTdState> {
    constructor(props: any) {
        super(props);
        this.setReferDayState_sendDay = this.setReferDayState_sendDay.bind(this);
        this.setFormState_showForm = this.setFormState_showForm.bind(this);
    }

    setReferDayState_sendDay(click_day: number | null){
        if(click_day !== null){
            this.props.func_setReferDayState(click_day);
        }
    }

    setFormState_showForm(is_show: boolean, type: string){
        this.props.func_setFormState(is_show, type);
    }

    displayTask(){
        if(this.props.task_list !== null) {
            return this.props.task_list.map((data) => {
                return <div className="calendar_td-task">{data}</div>
            });
        }
    }

    testTaskDisplay(){
        if(this.props.data_day !== null){
            return <div className="calendar_td-task">test_task</div>;
        }
    }

    render() {
        //console.log(this.props.task_list);
        return (
            <td className="calendar_td" onClick={() => this.setReferDayState_sendDay(this.props.data_day)}>
                <div className="calendar_td-date" onClick={() => this.setFormState_showForm(true, 'create')}>
                    {this.props.data_day}
                </div>
                {this.testTaskDisplay()}
            </td>
        );
    }
}