import React, { useState } from 'react'

export default function InputColor() {
  let [color, setcolor] = useState("")
  let [arr, setarr] = useState([])
  let [index, setIndex] = useState(null)
  let [updateMode, setUpdateMode] = useState(false);

  const inputhandler = (e) => {
    setcolor(e.target.value)
  }
  const addcolor = () => {
    setarr([...arr, color])
    setcolor("")
  }
  const DeleteHandler = (index) => {
    let newarr = arr.filter((e, i) => i !== index)
    setarr(newarr)
  }
  const Edithandler = (e, index) => {
    setIndex(index)
    setcolor(e)
    setUpdateMode(true)
  }
  const updateData = () => {
    arr.splice(index, 1, color);
    setarr([...arr]);
    setUpdateMode(false);
    setcolor("");
  }
  return (
    <div className='m-5'>
      <input value={color} type="text" onChange={(e) => inputhandler(e)} />
      {updateMode ? (
        <button onClick={() => updateData()}>Update</button>
      ) : (
        <button onClick={() => addcolor()}>Add Color</button>
      )}

      <div>
        <ul>
          {arr.map((e, i) => {
            return (
              <>
                <div className='d-flex gap-5'>
                  <li>{e}</li>
                  <div className='d-flex gap-4 m-2'>
                    <button onClick={() => Edithandler(e, i)}>Action</button>
                    <button onClick={() => DeleteHandler(i)}>Delete</button>
                  </div>
                </div>
                <hr />
              </>
            )
          }
          )}
        </ul>
      </div>
    </div>
  )
}