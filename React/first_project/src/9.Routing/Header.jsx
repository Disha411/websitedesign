import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.css"

export default function Header() {
    return (
        <div className='d-flex gap-3'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About us</NavLink>
            <NavLink to={"/contact"}>Contact us</NavLink>
        </div>

        // <div className='d-flex gap-3'>
        //     <Link to={"/"}>Home</Link>
        //     <Link to={"/about"}>About us</Link>
        //     <Link to={"/contact"}>Contact us</Link>
        // </div>
    )
}
