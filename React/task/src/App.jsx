import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './1.Components/Logo'
import Navigation from './1.Components/Navigation'
import Header_banner from './1.Components/Header_banner'
import Sidebar from './1.Components/Sidebar'
import Bodyarea from './1.Components/Bodyarea'
import Footer from './1.Components/Footer'


export default function App() {
  return (
    <div style={{border:"1px solid black", height:"760px",width:"500px"}}>
      <Logo />
      <Navigation />
      <Header_banner />
      <div className='div1'style={{display:"flex",justifyContent:"space-between",marginTop:'15px'}}>
        <Sidebar />
        <Bodyarea />
        </div>
      <Footer />
    </div>
  )
}
