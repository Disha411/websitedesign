import { FilePenLine } from "lucide-react";
import React, { useState } from "react";
import { Input } from "reactstrap";


export default function InputCom() {
    let [task, setTask] = useState("")
    let [arr, setArr] = useState([])
    let [index, setIndex] = useState(null);
    let [upadteMode, setUpdateMode] = useState(false);

    const getInputData = (e) => {
        console.log(e.target.value) //(e.target.value) bydefault
        setTask(e.target.value)
    }
    const addDataIntoArr = () => {
        console.log(addDataIntoArr)
        setArr([...arr, task])
        setTask("")
    }
    const DeleteHandler = (index) => {
        let newArr = arr.filter((e, i) => i !== index);
        setArr(newArr);
    }

    const Edithandler = (e, index) => {
        setIndex(index);
        setTask(e);
        setUpdateMode(true);
    }
    const updateData = () => {
        arr.splice(index, 1, task);
        setArr([...arr]);
        setUpdateMode(false);
        setTask("");
    };
    return (
        <div className="m-5 d-flex flex-column gap-2 align-items-center">
            <h2>Input : {task} </h2>

            <Input className="w-25" value={task} onChange={(e) => getInputData(e)} />
            {upadteMode ? (
                <button onClick={() => updateData()}>Update</button>
            ) : (
                <button onClick={() => addDataIntoArr()}>Add Task</button>
            )}
            <div>
                <ul>
                    {arr.map((e, i) => {
                        return (
                            <>
                                <div className="d-flex gap-5">
                                    <li>{e}</li>
                                    <div className="d-flex gap-2 justify-content-spacebetween">
                                        <button onClick={() => Edithandler(e, i)}>
                                            <FilePenLine />
                                        </button>
                                        <button className="border border-1 text-danger" onClick={() => DeleteHandler(i)}>Delete</button>
                                    </div>
                                </div>
                                <hr />
                            </>
                        );
                    })}

                </ul>
            </div>
        </div>
    )
}