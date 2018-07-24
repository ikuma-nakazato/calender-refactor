import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calendar from './calendar/Calendar';
import Sidemenu from './sidemenu/Sidemenu';
import Form from './Form';

/*本来はurlパラとして取得*/
const QUERY = {
    year: 2018,
    month: 5
}


interface iAppProps {
}

interface iAppState {
    refer_day: number;
    form_show: boolean;
    form_type: string;
    task_list: Array<{date: string; task: string}>;
}

class App extends React.Component <iAppProps, iAppState>{
    constructor(props: any){
        super(props);
        this.state = {
            refer_day: 1,
            form_show: false,
            form_type: 'none',
            task_list: []
        }
    }

    setReferDayState(click_day: number) {
        if(click_day !== null) {
            this.setState({refer_day: click_day})
        }
    }

    setFormState(is_show: boolean, type: string){
        if(is_show){
            this.setState({form_show: true, form_type: type})
        }else{
            this.setState({form_show: false})
        }
    }

    render() {
        return (
            <div>
                <Calendar
                    now_year={QUERY.year}
                    now_month={QUERY.month}
                    func_setReferDayState={this.setReferDayState.bind(this)}
                    func_setFormState={this.setFormState.bind(this)}
                />
                <Sidemenu
                    now_year={QUERY.year}
                    now_month={QUERY.month}
                    now_day={this.state.refer_day}
                />
                <Form
                    now_year={QUERY.year}
                    now_month={QUERY.month}
                    now_day={this.state.refer_day}
                    self_formShow={this.state.form_show}
                    self_formType={this.state.form_type}
                    func_setFormState={this.setFormState.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));