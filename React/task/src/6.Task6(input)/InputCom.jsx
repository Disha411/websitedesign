import React, { useState } from "react";
// import {input} from "reactstrap";

export default function InputCom() {
    let [task,setTask] = useState("")
    let [arr,setArr] = useState([])
    
    const getInputData = (e) => {
        console.log(e.target.value) //e.target.value bydefault
        setTask(e.target.value)
    }
    const addDataIntoArr =()=>{

        console.log(addDataIntoArr)
        setArr([...arr,task])
        setTask("")
    }
    return (
        <div >
            <h2>Input : {task} </h2>
            <input value={task} onChange={(e) => getInputData(e)} />
            <button onClick={()=>addDataIntoArr()}>Add Task</button>
            <div>
                <ul>
                    {arr.map((e)=>{
                        return<li>{e}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}