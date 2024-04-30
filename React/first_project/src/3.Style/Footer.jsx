import React from 'react'

export default function Footer() {
    let divStyle = {
        display: "flex",
        justifyContent: "center",
        border: "1px solid gray",
        marginTop:"20px"
    }
    return (
        <div style={divStyle}>@Copyright</div>
    )
}
