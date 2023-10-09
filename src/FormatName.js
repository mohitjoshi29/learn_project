import React from 'react'
import Propss from './Propss';

// function element(props) {
//     return <h1>hello,{props.name}</h1>
// }
const user = {
    firstName: "mohit",
    lastName: "joshi"
};
const user1={
    text:"hello everyone..."
};
var name="hello indore...";

export function FormatName(props) {
    // const brand1={name:"safari", model:"tata"};
    return (
        <>
            {/* <h1>{user.firstName + ' ' + user.lastName}</h1>
            <h1>{user1.text}</h1>
            <h1>{name}</h1> */}
            <p>hello,{props.valu}</p>
            <button onClick={()=>props.fun("joshi")}>click me</button>
            <Propss/>
        </>
    )
}
