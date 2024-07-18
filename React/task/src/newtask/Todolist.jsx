import React, { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'

export default function Todolist() {
  let [data, setdata] = useState()
  let [Arr, setArr] = useState([])

  const submithandler = (e) => {
    setArr([...Arr, data])
    setdata("")
  }
  return (
    <div className='bg-blue-950 mt-10 flex place-content-center justify-center items-center'>
      <div className='mt-10'>
        <Input value={data} className='' placeholder='Add item...' onChange={(e) => setdata(e.target.value)} />
        <Button className='' onClick={(e) => submithandler()}>CHECK LIST</Button>
      </div>

      {Arr.map((e, i) => {

        return (
          <tbody>
            <tr>
              <th scope="row">
                {i + 1}
              </th>
              <td>
                {e}
              </td>
              <td>
                <Button>Edit</Button>
              </td>
              <td>
                <Button>Delete</Button>
              </td>
            </tr>

          </tbody>
        )
      })

      }
    </div>
  )
}
