import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Button, Input, Table } from 'reactstrap'

const selecthandler = [
    { value: "Admin", label: "Admin" },
    { value: "HR", label: "HR" },
    { value: "QC", label: "QC" },
    { value: "Production", label: "Production" }
]
const intialValue = { Name: "", Email: "", gender: "", hobby: [], occupation: "Occupation" }

export default function Crud() {
    let [data, setdata] = useState(intialValue)
    let [Arr, setArr] = useState([])
    let [index, setIndex] = useState(null)
    let [upadteMode, setUpdateMode] = useState(false);

    const submithandler = (e) => {
        setArr([...Arr, data])
        localStorage.setItem("data", JSON.stringify([...Arr, data]))
        setdata(intialValue)
    }
    const DeleteHandler = (index) => {
        let newarr = Arr.filter((e, i) => i !== index)
        setArr(newarr)
        localStorage.setItem("data", JSON.stringify(newarr))
    }
    const edithandler = (e, i) => {
        setdata(e)
        setIndex(i)
        setUpdateMode(true)
    }
    const updatedata = () => {
        Arr.splice(index, 1, data);
        setArr([...Arr]);
        localStorage.setItem("data", JSON.stringify([...Arr]))
        setUpdateMode(false)
        setdata(intialValue)
    }
    const checkBoxhandler = (value, e) => {
        if (e.target.checked) {
            setdata({ ...data, hobby: [...data.hobby, value] })
        } else {
            let filterData = data.hobby.filter((e) => e !== value)
            setdata({ ...data, hobby: filterData })
        }
    }
    useEffect(() => {
        let jsonString = localStorage.getItem("data") || "[]"
        let normalData = JSON.parse(jsonString)
        setArr(normalData)
    }, [])

    return (
        <div className='m-auto mt-5 p-5 w-50 border shadow-sm'>
            <div className='inputs d-flex flex-column gap-3'>
                <Input value={data.Name} placeholder='Enter Name' onChange={(e) => setdata({ ...data, Name: e.target.value })} />
                <Input value={data.Email} placeholder='Enter Email' onChange={(e) => setdata({ ...data, Email: e.target.value })} />
            </div>

            <div className='radiobuttons m-2'>
                <Input type="radio" checked={data.gender === "male"} onChange={() => setdata({ ...data, gender: ("male") })} />Male
                <Input type="radio" checked={data.gender === "female"} onChange={() => setdata({ ...data, gender: ("female") })} />Female
                <Input type='radio' checked={data.gender === "other"} onChange={() => setdata({ ...data, gender: ("other") })} />Other
            </div>

            <div className='hobbycheckboxes'>
                <Input type="checkbox" checked={data?.hobby?.includes?.("cricket")} onChange={(e) => checkBoxhandler("cricket", e)} />Cricket
                <Input type="checkbox" checked={data?.hobby?.includes?.("vollyball")} onChange={(e) => checkBoxhandler("vollyball", e)} />Vollyball
                <Input type="checkbox" checked={data?.hobby?.includes?.("dancing")} onChange={(e) => checkBoxhandler("dancing", e)} />Dancing
                <Input type="checkbox" checked={data?.hobby?.includes?.("singing")} onChange={(e) => checkBoxhandler("singing", e)} />Singing
            </div>

            <div className='occupation'>
                <Select value={{ value: data.occupation, label: data.occupation }} options={selecthandler} onChange={(e) => setdata({ ...data, occupation: (e.value) })} />
            </div>

            <div className='text-center'>
                {upadteMode ? (
                    <Button className='w-2 bg-info border m-1' onClick={() => updatedata()}>Update</Button>
                ) : (
                    <Button className='w-2 bg-success m-1' onClick={(e) => submithandler(e)}>Submit</Button>
                )}
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {Arr.map((e, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{e.Name}</td>
                                <td>{e.Email}</td>
                                <td>{e.gender}</td>
                                <td>{e.hobby}</td>
                                <td>{e.occupation}</td>
                                <td><Button onClick={() => edithandler(e, i)}>Edit</Button></td>
                                <td><Button className='bg-danger' onClick={() => DeleteHandler(i)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>


    )
}
