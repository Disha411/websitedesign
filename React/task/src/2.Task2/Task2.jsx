import React from 'react'
import Logo from './Logo'
import Header_Banner from './Header_Banner'
import Textarea from './Textarea'
import Box from './Box'
import Footer from './Footer'

export default function Task2() {
    return (
        <div>   
            <Logo />
            <Header_Banner />
            <Textarea />
            <div className='div1' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "15px" }}>
                <Box />
                <Box />
                <Box />
            </div>
            <Footer /></div>
    )
}
