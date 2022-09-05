import React, {Component, PureComponent} from 'react';
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Hubert'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Hubert Hsieh'
            });
        }, 2000)
    }

    render() {
        console.log('*** Parent Comp render ***')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;