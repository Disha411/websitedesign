import React from 'react'
import Logo from './Logo'
import BlankBox from './BlankBox'
import Box from './Box'
import Footer from './Footer'

export default function Task4() {
    return (
        <div style={{ border: "1px solid black", height: "800px", width: "700px" }}>
            <Logo/>
            <div className='div1' style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "5px", marginTop: "10px" }}>
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
                <BlankBox />
            </div>
            <div className='div2' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px" }}>
                <Box />
                <Box />
                <Box />
            </div>
            <Footer />
        </div>
    )
}
