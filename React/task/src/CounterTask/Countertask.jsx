import React, { useState } from 'react'

export default function Countertask() {
    let [count, setcount] = useState(0);

    const IncHandler = () => {
        setcount(count + 1)
    }
    const DecHandler = () => {
        setcount(count - 1)
    }
    const reset = () => {
        setcount(0)
    }
    return (
        <div className='d-flex flex-column gap-5 m-5 justify-content-center'>
            <h1 className='text-center'>Counter App</h1>
            <div className='text-center'>
                <h1>{count}</h1>
            </div>
            <div className='d-flex gap-5 justify-content-center'>
                <button className='w-25 bg-success border rounded' onClick={() => IncHandler()}>Increment </button>
                <button className='w-25 bg-danger border rounded' onClick={() => DecHandler()}>Decrement</button>
                <button className='w-25 bg-warning border rounded' onClick={() => reset()} >Reset </button>  
            </div>
        </div>
    )
}

