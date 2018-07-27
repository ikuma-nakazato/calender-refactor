import * as React from 'React';
import * as ReactDOM from 'react-dom';
import Index from './index';
import reducer from '../modules/test'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const inst_store = createStore(reducer);


class App extends React.Component{
    render(){
        return(
            <Provider store={inst_store}>
                <Index />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));