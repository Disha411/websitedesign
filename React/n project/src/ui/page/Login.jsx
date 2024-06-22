import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Login() {
    let [data, setdata] = useState({ email: "", password: "" })
    console.log("🚀 ~ Login ~ data:", data)

    const Submithandler = (e) => {
        e.preventDefault()
        setdata({ email: "", password: "" });
    }

    return (
        <div className='h-[300px] w-[400px] m-auto mt-5 bg-purple-300 rounded p-3 text-white'>
            <h1 className='h1 text-center'>Login</h1>
            <label className='text-xl'>Email id</label>
            <Input value={data.email} type="text" placeholder='Enter Email id' className='bg-slate-100' onChange={(e) => setdata({ email: e.target?.value })} />

            <label className='text-xl'>Password</label>
            <Input value={data.password} type="password" placeholder='Enter Password' className='bg-slate-100' onChange={(e) => setdata({ password: e.target?.value })} />

            <div className='text-center mt-3'>
                <Button className='bg-blue-600 ' onClick={(e) => Submithandler(e)}>Submit</Button>
            </div>
        </div>
    )
}
