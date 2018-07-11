import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calendar from './calendar/Calendar';
import Sidemenu from './sidemenu/Sidemenu';
import Form from './Form';
const QUERY = {
    year: 2018,
    month: 5
}


interface iAppProps {

}

interface iAppState {
    clicked_day: number;
    form_judge: boolean;
}

class App extends React.Component <iAppProps, iAppState>{
    constructor(props: any){
        super(props);
        this.state = {
            clicked_day: 1,
            form_judge: false
        }
    }

    getDayFromCalendar(i: number) {
        if(i !== null) {
            this.setState({clicked_day: i})
        }
    }
    
    getFormJudge(handle: number) {
        if(handle === 1){
            this.setState({form_judge: true})
        }
    }

    render() {
        return (
            <div>
                <Calendar
                    now_year={QUERY.year}
                    now_month={QUERY.month}
                    day_to_Index={this.getDayFromCalendar.bind(this)}
                    form_judge={this.getFormJudge.bind(this)}
                />
                <Sidemenu
                    now_year={QUERY.year}
                    now_month={QUERY.month}
                    now_day={this.state.clicked_day} />
                <Form form_judge={this.state.form_judge} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));