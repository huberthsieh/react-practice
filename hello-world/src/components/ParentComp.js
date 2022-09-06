import React, {Component} from 'react';
// import RegularComp from "./RegularComp";
// import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

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
                name: 'Hubert'
            });
        }, 2000)
    }

    render() {
        console.log('*** Parent Comp render ***')
        return (
            <div>
                Parent Component
                {/*<RegularComp name={this.state.name} />*/}
                {/*<PureComp name={this.state.name} />*/}
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;