import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'

export default function Crud() {
    let [data, setdata] = useState({ Name: "", Email: "", gender: "" })
    let [Arr, setArr] = useState([])

    // let [index, setIndex] = useState(null)

    const submithandler = (e) => {
        setArr([...Arr, data])
        setdata({ Name: "", Email: "", gender: "" })
    }
    const DeleteHandler = (index) => {
        let newarr = Arr.filter((e, i) => i !== index)
        setArr(newarr)
    }

    return (
        <div className='m-5 p-5 w-3 h-4 '>
            <div className='d-flex flex-column gap-3'>
                <Input value={data.Name} placeholder='Enter Name' onChange={(e) => setdata({ ...data, Name: e.target.value })} />
                <Input value={data.Email} placeholder='Enter Email' onChange={(e) => setdata({ ...data, Email: e.target.value })} />
            </div>

            <div className='m-2'>
                <Input type="radio" checked={gender === "male"} onChange={() => setdata({ ...data, gender: ("male") })} />Male
                <Input type="radio" checked={gender === "female"} onChange={() => setdata({ ...data, gender: ("female") })} />Female
                <Input type='radio' checked={gender === "other"} onChange={() => setdata({ ...data, gender: ("other") })} />Other
            </div>
            <div>
                <Input type="checkbox" />Cricket
                <Input type="checkbox" />Vollyball
                <Input type="checkbox" />Dancing
                <Input type="checkbox" />Singing
            </div>
            <div className=''>
                <select>
                    <option value="">Admin</option>
                    <option value="">HR</option>
                    <option value="">QC</option>
                    <option value="">Production</option>
                </select>
            </div>
            <div className='text-center'>
                <Button className='w-2 bg-success m-1' onClick={(e) => submithandler(e)}>Submit</Button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody>
                    {Arr.map((e, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{e.Name}</td>
                                <td>{e.Email}</td>
                                <td>{data.gender}</td>
                                <td></td>
                                <td><Button>Update</Button></td>
                                <td><Button className='bg-danger' onClick={() => DeleteHandler(i)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>


    )
}
