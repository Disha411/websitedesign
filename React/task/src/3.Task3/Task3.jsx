import React from 'react'
import Logo from './Logo'
import Sidebar from './Sidebar'
import Header_banner from './Header_banner'
import Bodyarea from './Bodyarea'
import Footer from './Footer'
import Blank from './Blank'


export default function Task3() {
    return (
        <div style={{ border: "1px solid black", height: "700px", width: "500px" }}>
            <Logo />
            <div className='div1' style={{ display: "grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",marginTop:"20px" }}>
                <Sidebar/>
                <Header_banner />
                <Blank />
                <Bodyarea />
            </div>
            <Footer />
        </div>
    )
}
