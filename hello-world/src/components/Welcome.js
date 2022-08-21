import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, title} = this.props;

        return (
            <h1>
               Welcome {name} a.k.a {title}
            </h1>
        );
    }
}

export default Welcome;