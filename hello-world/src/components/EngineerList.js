import React from 'react';
import Engineer from "./Engineer";

const EngineerList = () => {
    const names = ['Hubert', 'Alex', 'Chris', 'Hubert'];
    const engineers = [
        {
            id: 0,
            name: 'Hubert',
            age: 33,
            skill: 'React'
        },
        {
            id: 1,
            name: 'Alex',
            age: 30,
            skill: 'Vue'
        },
        {
            id: 2,
            name: 'Chris',
            age: 35,
            skill: 'React'
        }
    ]

    const engineerList = engineers.map(engineer => (
        <Engineer key={engineer.name} engineer={engineer} />
    ));

    const nameList = names.map((name, index) => (
        <h2 key={index}>{index} {name}</h2>
    ))

    return (
        <div>
            {
                nameList
            }
        </div>
    );
};

export default EngineerList;