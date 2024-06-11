import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Label, Table } from 'reactstrap'

export default function Register() {
    let [user, setUser] = useState({ name: "", email: "", password: "" })
    let [Arr, setArr] = useState([])

    const Submithandler = (e) => {
        e.preventDefault()
        setArr([...Arr, user])
        localStorage.setItem("data", JSON.stringify([...Arr, user]))
        setUser({ name: "", email: "", password: "" })
    }
    const deletehandler = (index) => {
        let newarr = Arr.filter((e,i) => i !== index)
        setArr(newarr)
        localStorage.setItem("data", JSON.stringify(newarr))
    }
    useEffect(() => {
        let jsonString = localStorage.getItem("data") ||"[]"
        let normalData = JSON.parse(jsonString)
        setArr(normalData)
    }, [])
    return (
        <div className=''>
            <Form action="" className='m-2 w-25 '>

                <Label>Name : </Label>
                <Input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />

                <Label>Email :</Label>
                <Input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                <Label>Password :</Label>
                <Input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

                <Button className='bg-success' onClick={(e) => Submithandler(e)}>Submit</Button>
            </Form>

            <hr />
            <Table className='w-10'>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Arr.map((e, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td><Button className='bg-danger' onClick={() => deletehandler(i)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

