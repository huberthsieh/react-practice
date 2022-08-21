import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleIncrement() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    handleIncrementTest() {
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={() => this.handleIncrement()}> Increment </button>
            </div>
        );
    }
}

export default Counter;