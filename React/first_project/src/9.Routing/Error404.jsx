import { Button } from 'reactstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Error404</h1>
            <Button onClick={() => navigate(-1)}>Go to back</Button>
        </>
    )
}
