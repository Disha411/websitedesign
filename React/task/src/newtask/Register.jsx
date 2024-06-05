import React, { useState } from 'react'
import { Button, Form, Input, Label, Table } from 'reactstrap'

export default function Register() {
    let [user, setUser] = useState({ name: "", email: "", password: "" })
    let [Arr, setArr] = useState([])


    const Submithandler = (e) => {
        e.preventDefault()
        setArr([...Arr, user])
        setUser({ name: "", email: "", password: "" })
    }
    return (
        <div className='w-full'>
            <Form action="" className='m-5 w-25'>

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
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

