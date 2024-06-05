import axios from 'axios'
import React from 'react'
import { Button } from 'reactstrap'

export default function ApiCall() {

    const callApiHandler = () => {
        let data = axios.get("https://fakestoreapi.com/products")
        console.log("🚀 ~ callApiHandler ~ data:", data)
    }
    return (
        <div>
            <Button onClick={() => callApiHandler()}>Call Api</Button>
        </div>
    )
}

