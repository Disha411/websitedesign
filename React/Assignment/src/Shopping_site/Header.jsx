import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function Header() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    gap: '25px',
                    padding: '15px'
                }}
            >
                <Button className='bg-green-300'>Browse all Category</Button>

                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Stores</a>
                <a href="">Product</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>

            <div className='container p-3 w-full relative'>
                <img className="rounded-2xl w-full " src="https://nest.botble.com/storage/sliders/1-1.png" alt="" />
                <div>
                    <h1 className='absolute font-bold text-5xl top-20 left-10 w-[520px] font-serif'>Don't miss amazing grocery deals</h1>
                    <p className='absolute top-48 left-10 text-gray-500 font-medium text-xl'>Sign up for the daily newsletter</p>
                    <div className='absolute bottom-40 left-10 rounded flex'>
                        <input placeholder='Your email address' className='w-fit p-2 rounded-l-3xl' /><button className='p-2 bg-green-400 rounded-3xl text-white'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='ml-5 '>
                <h1 className='font-medium text-xl'>Featured Categories</h1>

                <div className='card flex gap-3'>
                    {[1, 2, 3, 4].map((e, i) => {
                        return (
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
