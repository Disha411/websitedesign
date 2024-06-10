import React, { useState } from 'react'

export default function Checkbox() {
    let [gender, setGender] = useState(["Male"])
    const checkboxhandler = (value, e) => {
        console.log("=========", e.target.checked)

        if (e.target.checked) {
            setGender([...gender, value])
        } else {
            let filterdata = gender.filter((e) => e !== value)
            setGender(filterdata)
        }
    }

    return (
        <div>
            <h1>{gender}</h1>
            <input type="checkbox" checked={gender.includes("Male")} onChange={(e) => checkboxhandler("Male", e)} />Male
            <input type="checkbox" checked={gender.includes("Female")} onChange={(e) => checkboxhandler("Female", e)} />Female
            <input type="checkbox" checked={gender.includes("Other")} onChange={(e) => checkboxhandler("Other", e)} />Other
        </div>
    )
}
