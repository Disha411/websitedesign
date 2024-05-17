import React, { useState } from 'react'


export default function InputCom2() {
    let [task, setTask] = useState("")
    let [arr, setArr] = useState([])
    let [index, setIndex] = useState(null)
    let [upadteMode, setUpdateMode] = useState(false);

    const inputhandler = (e) => {
        setTask(e.target.value);
    }
    const addDataHandler = () => {
        setArr([...arr, task]);
        setTask("")
    }
    const DeleteHandler = (index) => {
        let newArr = arr.filter((e, i) => i !== index);
        setArr(newArr);
    }
    const Edithandler = (e,index) => {
        setIndex(index);
        setTask(e);
    }

    return (
        <div className='m-5 px-4'>
            <input
                value={task}
                className='w-25' onChange={(e) => inputhandler(e)} />
            <button onClick={() => addDataHandler()}>Add Task</button>
            <hr />

            <div>
                <ul>
                    {arr.map((e, i) => {
                        return (
                            <>
                                <div className='d-flex gap-5'>
                                    <li>{e}</li>
                                    <button onClick={() => Edithandler(e,i)}>Edit</button>
                                    <button onClick={() => DeleteHandler(i)}>Delete</button>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}
