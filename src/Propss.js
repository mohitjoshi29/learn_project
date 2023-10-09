import React from 'react';

import { ReactDOM } from 'react-dom/client';

function Car(Props){
    return <h2>hello, {Props.brand.model}</h2>
}

export default function Propss() {
    const brand1={name:"safari", model:"tata"};

  return (
    <>
    <h2>who lives in my village...</h2>
    <Car brand={brand1}/>
    </>
  )
}
