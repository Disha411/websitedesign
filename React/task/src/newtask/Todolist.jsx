import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'

export default function Todolist() {
  let [data, setdata] = useState()
  let [Arr, setArr] = useState([])

  const submithandler = (e) => {
    setArr([...Arr, data])
    setdata("")
  }
  const deltehandler = (index) => {
    let filterData = Arr.filter((e, i) => i !== index)
    setArr(filterData)
  }

  return (
    <div className='my-5'>
      <div className='flex justify-center mb-5'>
        <input value={data} placeholder='Add item...' className='w-[500px] border h-10 rounded' onChange={(e) => setdata(e.target.value)} />
        <Button className='' onClick={(e) => submithandler()}>CHECK LIST</Button>
      </div>
     
      <Table>
        {Arr.map((e, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th scope="row">
                  {i + 1}
                </th>
                <td>{e}</td>
                <td>
                  <Button onClick={() => deltehandler(i)}>Delete</Button>
                </td>
                <td>
                  <Button>Edit</Button>
                </td>
              </tr>
            </tbody>
          )
        })
        }
      </Table>
    </div>
  )
}
