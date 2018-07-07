import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calendar from './calendar/Calendar';


class App extends React.Component {
    render() {
        return (
            <div>
                <Calendar />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));