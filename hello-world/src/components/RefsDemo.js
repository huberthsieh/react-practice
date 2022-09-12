import React, {Component} from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);

        // React.createRef
        this.inputRef = React.createRef();

        // Callback
        this.callbackRef = null;
        this.setCallbackRef = element => {
            this.callbackRef = element;
        }
    }

    componentDidMount() {
        // React.createRef
        // this.inputRef.current.focus();
        // console.log(this.inputRef);

        // Callback
        if (this.callbackRef) {
            this.callbackRef.focus();
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCallbackRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;