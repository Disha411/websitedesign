import React, { useState } from 'react'

export default function FunctionalState() {
    let [x, setX] = useState(1001)

    const incrementCount = () => {
        setX(x + 1)
        console.log("🚀 ~ incrementCount  ~ x:", x)
    }
    const decrementCount = () => {
        setX(x - 1)
        console.log("🚀 ~ incrementCount  ~ x:", x)
    }


    return (
        <div>
            <h1>Count is{x}</h1>
            <button onClick={() => incrementCount()}>Increment Count</button>
            <br /><br />
            <button onClick={() => decrementCount()}>decrementCount</button>
        </div>
    )
}
