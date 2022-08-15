import React from "react";

const Hello = () => {
    return React.createElement(
        'div',
        {id: 'parent', className: 'box'},
        React.createElement('h1', null, 'Hello Hello.js')
    )
}

export default Hello;