import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Error404 from './Error404'
import Header from './Header'


export default function Router() {
    return (
        <div className='d-flex flex-col gap-3'>
            <BrowserRouter>
                {/* <div className='d-flex gap-3'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About us</Link>
                    <Link to={"/contact"}>Contact us</Link>
                    </div> */}
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contactus />} />
                    <Route path="/about" Component={Aboutus} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
