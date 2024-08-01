import { Button } from 'reactstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { counterAction } from './CounterSlice'
import { inc } from './CounterSlice'
import { dec } from './CounterSlice'
import { reset } from './CounterSlice'
import { inc2 } from './CounterSlice'
import { dec2 } from './CounterSlice'
import { reset2 } from './CounterSlice'


export default function CountCom() {

    let CounterSlice = useSelector((store) => {
        // console.log("🚀 ~ useSelector ~ store:", store)
        return store.CounterSlice
    })
    const dispatch = useDispatch()

    const incHandler = () => {
        // dispatch(counterAction.inc)
        dispatch(inc())
    }

    return (
        <div>
            <h1>Count is {CounterSlice.count}</h1>
            <div className='flex gap-2'>
                <Button onClick={() => incHandler()}>Inc</Button>
                <Button onClick={() => dispatch(dec())}>Dec</Button>
                <Button onClick={() => dispatch(reset())}>Reset</Button>
            </div>

            <h1>Count2 is {CounterSlice.count2}</h1>
            <div className='flex gap-2'>
                <Button onClick={() => dispatch(inc2())}>Inc</Button>
                <Button onClick={() => dispatch(dec2())}>Dec</Button>
                <Button onClick={() => dispatch(reset2())}>Reset</Button>
            </div>
        </div>
    )
}

