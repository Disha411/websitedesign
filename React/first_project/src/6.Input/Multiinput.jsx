import React, { useState } from 'react'
import { Button, Form, Input, Label, Table } from 'reactstrap'

export default function Multiinput() {
    let [user, setUser] = useState({ email: "", password: "" });
    let [userArr, setUserArr] = useState([])
    let [updatemode, setupdatemode] = useState(false)
    let [index, setindex] = useState(null)

    const submitHandler = () => {
        setUserArr([...userArr, user])
        setUser({ email: "", password: "" })
    }
    const deletehandler = (index) => {
        let newarr = userArr.filter((e, i) => i !== index)
        setUserArr(newarr)
    }
    const edithandler = (e, index) => {
        setindex(index)
        setUser(e)
        setupdatemode(true)
    }
    const updatedata = () => {
        userArr.splice(index, 1, user);
        setUserArr([...userArr])
        setupdatemode(false)
        setUser({ email: "", password: "" })
    }
    return (
        <div>
            <Form className="border border-black p-4">
                <Label>Email</Label>
                <Input value={user.email} placeholder='Enter a email' onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                }} />

                <Label>Password</Label>
                <Input value={user.password} placeholder='Enter a password' onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }} />
                {updatemode ?
                    (
                        <Button className='w-full mt-2 bg-success' onClick={() => updatedata()}>Update</Button>
                    ) : (
                        <Button className='w-full mt-2 bg-danger' onClick={() => submitHandler()}>Submit</Button>
                    )
                }
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userArr.map((e, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td>
                                    <Button className='mr-3' onClick={() => edithandler(e,i)}>Edit</Button>
                                    <Button onClick={() => deletehandler(i)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
