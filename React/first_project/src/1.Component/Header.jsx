import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='Header'>
            <div className='anchortag'>
                <a href="">Home</a>
                <a href="">Search</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </div>
            <div className='Searchbar'>
                <input type="text" />
            </div>
        </div>
    )
}
