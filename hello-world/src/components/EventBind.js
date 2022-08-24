import React, {Component} from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello'
        }

        // This approach is better compared to binding in the render method, because the binding happens once in the constructor.
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    // This is the main approach.
    clickHandler = (param) => {
        this.setState({
            message: param ? param : 'Goodbye!'
        })
    }

    render() {
        const {message} = this.state;

        return (
            <div>
                <div>{message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/}
                {/*<button onClick={this.clickHandler}>Click</button>*/}
                <button onClick={() => this.clickHandler('test')}>Click</button>
            </div>
        );
    }
}

export default EventBind;