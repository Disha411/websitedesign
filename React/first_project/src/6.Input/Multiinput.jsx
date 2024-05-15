import React, { useState } from 'react'
import { Button, Form, Input, Label, Table } from 'reactstrap'

export default function Multiinput() {
    let [user, setUser] = useState({ email: "", password: "" });
    let [userArr,setUserArr] = useState([])

    const submitHandler = () =>{
        setUserArr([...userArr,user])
        setUser({email:"",password:""})
    }
    return (
        <div>
            <Form className="border border-black p-4">
                <Label>Email</Label>
                <Input placeholder='Enter a email' onChange={() => {
                    setUserArr({...user,email: e.target.value })
                }}/>

                <Label>Password</Label>
                <Input placeholder='Enter a password '></Input>

                <Button className='w-full mt-2 bg-danger' onClick={()=>submitHandler()}>Submit</Button>
            </Form>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            Sr.
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
