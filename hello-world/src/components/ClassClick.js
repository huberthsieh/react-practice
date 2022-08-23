import React, {Component} from 'react';

class ClassClick extends Component {

    clickHandler() {
        console.log('Click the button, at a class component!')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        );
    }
}

export default ClassClick;