import React, { useState } from 'react'

export default function InputColor() {
  let [color, setColor] = useState("")
  let [arr, setArr] = useState([])

  const colorinputhandler = (e) => {
    setColor(e.target.value)
  }
  const addcolorhandler = () => {
    setArr([...arr, color])
    setColor("")
  }
  return (
    <div>
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
                    <button>Delete</button>
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

