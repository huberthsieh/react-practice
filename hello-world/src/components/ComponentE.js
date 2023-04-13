import React, {Component} from 'react';
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {

    // ComponentE.contextType = UserContext
    static contextType = UserContext

    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// static contextType = UserContext
// ComponentE.contextType = UserContext

export default ComponentE;