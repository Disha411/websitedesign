import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'

export default function LocalStorage() {
  let [name, setname] = useState("")

  useEffect(() => {
    let data = localStorage.getItem("name")
    console.log("🚀 ~ useEffect ~ data:", data)
    setname(data)
  }, [])

  const setNamekey = () => {
    localStorage.setItem("name", "Urvish")
  }
  const setAge = () => {
    localStorage.setItem("age", "26")
  }
  const updateName = () => {
    localStorage.setItem("name", "Disha")
  }
  const getName = () => {
    let data = localStorage.getItem("name")
    setname(data)
  }
  //remove age
  const removeAge = () => {
    localStorage.removeItem("age")
  }

  const removeAll = () => {
    localStorage.clear()
  }
  return (
    <div>
      <h1>Name :{name}</h1>
      <Button onClick={() => setNamekey()}>Add name</Button>
      <Button onClick={() => setAge()}>Add age</Button>
      <Button onClick={() => updateName()}>Update name</Button>
      <Button onClick={() => getName()}>Get name</Button>
      <Button onClick={() => removeAge()}>remove age</Button>
      <Button onClick={() => removeAll()}>remove all</Button>
    </div>
  )
}

// to store data =>  localStorage.setItem("key name","data in string")
// to update data =>  localStorage.setItem("key name which key you want to update","new data in string")
// remove one key => localStorage.removeItem("key name")
// remove all key => localStorage.clear()
// to get data => localStorage.getItem("key name")            