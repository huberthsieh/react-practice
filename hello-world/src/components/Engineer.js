import React from 'react';

const Engineer = ({engineer}) => {
    return (
        <div>
            <h2>
                I am {engineer.name}. I am {engineer.age} years old. I use {engineer.skill} on my work.
            </h2>
        </div>
    );
};

export default Engineer;