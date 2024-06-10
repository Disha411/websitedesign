import React, { useState } from 'react'

export default function RadioButton() {
  let [gender, setGender] = useState("Male")

  return (
    <div>
      <h1>{gender}</h1>
      <input type="radio" checked={gender === "Male"} onChange={() => setGender("Male")} />Male
      <input type="radio" checked={gender === "Female"} onChange={() => setGender("Female")} />Female
      <input type="radio" checked={gender === "Other"} onChange={() => setGender("Other")} />Other
    </div>
  )
}

