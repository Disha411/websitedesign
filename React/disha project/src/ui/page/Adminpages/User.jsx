import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

export default function User() {
  let [userData, setuserData] = useState([])

  const callApiHandler = async () => {
    try {
      let response = await axios.get("http://localhost:9999/user/getAll");
      console.log("response:", response)
      setuserData(response.data.data)
      
    }
    catch (error) {
      console.log("error:", error)
    }
  }
  useEffect(() => {
    callApiHandler()
  }, [])

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((e,i) => {
            return (
              <tr>
                <th scope="row">{i+1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.gender}</td>
                <td>{e.city}</td>
                <td>{e.pincode}</td>
              </tr>
            )
          })
          }
        </tbody>
      </Table>
    </div>
  )
}
