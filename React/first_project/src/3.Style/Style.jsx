import React from 'react'
import Header from './Header'
import Cardcom from './Cardcom'
import Footer from './Footer'


export default function Style() {
    return (
        <div>
            <Header />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: "20px" }}>
                <Cardcom />
                <Cardcom />
                <Cardcom />
            </div>
            <Footer />

        </div>
    )
}
