import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Header_banner from './Header_banner'
import Sidebar from './Sidebar'
import Bodyarea from './Bodyarea'
import Footer from './Footer'

export default function Task1() {
    return (
        <div style={{ border: "1px solid black", height: "760px", width: "500px" }}>
            <Logo />
            <Navigation />
            <Header_banner />
            <div className='div1' style={{ display: "flex", justifyContent: "space-between", marginTop: '15px' }}>
                <Sidebar />
                <Bodyarea />
            </div>
            <Footer />
        </div>
    )
}
