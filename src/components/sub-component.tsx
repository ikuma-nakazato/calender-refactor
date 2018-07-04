import * as React from 'react';

// Propsの型定義
interface IProps {
    name: string;
}

interface IState {
    count: number;
}

export class SubComponent extends React.Component<IProps, IState> {
    constructor(parameters: { props: any }) {
        let props = parameters.props;
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick() {
        console.log('クリックされました!');

        this.setState({
            count: this.state.count + 2048,
        });
    }

    render() {

        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>{this.state.count}</div>
                <button onClick={this.handleClick.bind(this)}>Add +1</button>
            </div>
        );
    }
}