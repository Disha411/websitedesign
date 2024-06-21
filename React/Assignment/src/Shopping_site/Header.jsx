import React from 'react'
import { Button } from 'reactstrap'

export default function Header() {
    return (
        <>
            <div className='flex gap-5 p-5'>
                <Button className=''>Browse all Category</Button>

                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Stores</a>
                <a href="">Product</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>

            <div className='container p-3 w-full fixed'>
                <img className="rounded-2xl w-full " src="https://nest.botble.com/storage/sliders/1-1.png" alt="" />
                <div>
                    <h1 className='absolute font-bold text-5xl top-20 left-10 w-40'>Don't miss amazing grocery deals</h1>
                    <p className='absolute top-28 left-10 bg-gray-500'>Sign up for the daily newsletter</p>
                </div>
            </div>
        </>
    )
}
