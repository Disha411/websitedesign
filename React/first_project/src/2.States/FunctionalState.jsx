import React, { useState } from 'react'

export default function FunctionalState() {
    let [x, setX] = useState(1001)
    let [count, setCount] = useState({ a: 10 })

    const incrementCount = () => {
        setX(x + 1)
        console.log("🚀 ~ incrementCount  ~ x:", x)
    }
    const decrementCount = () => {
        setX(x - 1)
        console.log("🚀 ~ incrementCount  ~ x:", x)
    }


    const incrementCountA = () => {
        setCount({ a: count.a + 1 })
    }
    const decrementCountA = () => {
        setCount({ a: count.a - 1 })
    }


    return (
        <div>
            <h1>Count is {x}</h1>
            <button onClick={() => incrementCount()}>Increment Count</button>
            <br /><br />
            <button onClick={() => decrementCount()}>decrementCount</button>


            <hr />
            <h1>CountA is {count.a}</h1>
            <button onClick={() => incrementCountA()}>incrementCountA</button>
            <br /><br />
            <button onClick={() => decrementCountA()}>decrementCountA</button>
        </div>
    )
}
