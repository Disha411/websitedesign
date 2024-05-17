import React, { useState } from 'react'

export default function InputColor() {
  let [color, setColor] = useState("")
  let [arr, setArr] = useState([])
  let [index, setIndex] = useState(null)

  const colorinputhandler = (e) => {
    setColor(e.target.value)
  }
  const addcolorhandler = () => {
    setArr([...arr, color])
    setColor("")
  }
  const DeleteHandler = (index) => {
    let newarr = arr.filter((e, i) => i !== index)
    setArr(newarr)
  }
  return (
    <div className='m-5'>
      <input value={color}
        className='' placeholder='Enter a color' onChange={(e) => colorinputhandler(e)} />
      <button onClick={() => addcolorhandler()}>Add Color</button>

      <div>
        <ul>
          {arr.map((e, i) => {
            return (
              <>
                <div className='d-flex gap-5'>
                  <li>{e}</li>
                  <div>
                    <button className='rounded'>Edit</button>
                    <button className='rounded' onClick={() => DeleteHandler(i)}>Delete</button>
                  </div>
                </div>
                <hr />
              </>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}