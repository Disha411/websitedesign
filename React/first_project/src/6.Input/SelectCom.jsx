import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: '10ml', label: '10ml' },
  { value: '50ml', label: '50ml' },
  { value: '100ml', label: '100ml' },
  { value: '250ml', label: '250ml' },
  { value: '500ml', label: '500ml' }
]

export default function SelectCom() {
  let [size, setsize] = useState("50ml")
  return (
    <div>
      <h1>Size:{size}</h1>
      <Select value={{value: size, label: size}} options={options} onChange={(e) => setsize(e.value)} />
    </div>
  )
}