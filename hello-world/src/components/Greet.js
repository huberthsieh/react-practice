import React from "react";

// function Greet() {
//     return <h1>Hello Hubert</h1>
// }

// import { Greet } from "./components/Greet";
// export const Greet = () => <h1>Hello Hubert</h1>

const Greet = (props) => {
    const {name, title} = props;

    return (
        <div>
            <h1>Hello {name} a.k.a {title}</h1>
            {props.children}
        </div>
    )
}

export default Greet;