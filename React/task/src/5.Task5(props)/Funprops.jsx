import React from 'react'
import Childprops from './Childprops'


export default function Funprops() {
    let user = {
        name: "urvish",
        age: 23,
        address: {
            city: "surat",
            state: "gujarat",
        },
        hobby: ["reading", "play game"],
    };
    console.log(user);
  return (
    <div>
        <Childprops user1={user}/>
    </div>
  )
}
