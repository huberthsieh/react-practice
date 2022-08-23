import React from 'react';

function FunctionClick() {

    const clickHandler = () => {
        console.log('Click the button, at a functional component!')
    }

    return (
        <div>
            {/* Do not add the parentheses */}
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default FunctionClick;