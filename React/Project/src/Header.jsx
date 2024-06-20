import React from 'react'
import logoImg from "./Images/logo.svg"
import { Button, Card, CardBody, CardText, CardTitle, Input, Table, UncontrolledCarousel } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Heart, Instagram, Linkedin, MessageCircleMore, Search, ShoppingCart, Twitter, User } from 'lucide-react'
import backgroundimg from "./Images/backgroundimg.avif"
import video from "./Images/video.mp4"

export default function Header() {

    return (
        <>
            <div className='Header flex gap-3 p-2'>
                <p><img src={logoImg} alt="" /></p>
                <NavLink to={"Best_Sellers"}>Best_Sellers</NavLink>
                <NavLink to={"New_arrivals"}>New_arrivals</NavLink>
                <NavLink to={"Oversized_tshirts"}>Oversized_tshirts</NavLink>
                <NavLink to={"All_categories"}>All_categories</NavLink>
                <NavLink to={"Merchandise"}>Merchandise</NavLink>
                <div className='flex border'>
                    <Input type="text" />
                    <Search />
                </div>
                <User />
                <Heart />
                <ShoppingCart />
            </div>
            <hr />
            <div className='Carousel'>
                <UncontrolledCarousel
                    items={[
                        {
                            key: 1,
                            src: 'https://veirdo.in/cdn/shop/files/offer_banner_new_model_1_200c8d48-dd3e-499c-ab32-21995c8d48fc.jpg?v=1718601500'
                        },
                        {
                            key: 2,
                            src: 'https://veirdo.in/cdn/shop/files/2_3.png?v=1707482733'
                        },
                        {
                            key: 3,
                            src: 'https://veirdo.in/cdn/shop/files/3_1_985cdfaf-8c6f-4b15-8829-2cbe26d58d6e.png?v=1707476950'
                        },
                        {
                            key: 4,
                            src: 'https://veirdo.in/cdn/shop/files/4_9405103b-1e93-4ceb-a9a9-216c17798a78.png?v=1707477126'
                        },
                        {
                            key: 5,
                            src: 'https://veirdo.in/cdn/shop/files/sale_7.png?v=1707811353'
                        }
                    ]}
                />
            </div>
            <div className='cards p-4'>
                <h1 className='font-bold'>OUR BESTSELLERS</h1>
                <div className='flex gap-5'>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/Originals-Beige-Oversized-T-Shirt-Veirdo-6625.jpg?v=1707158469&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/v44.jpg?v=1717407545&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Veirdo Blue Oversized Back Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/Teddy-Printed-Oversized-T-Shirt-Veirdo-9408.jpg?v=1707167484&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/9_0a82b071-8c51-4e44-b9bd-3b61ae449623.jpg?v=1709546813&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                </div>
                <Button className='bg-green-600 m-3'>SEE MORE BESTSELLERS</Button>
                <h1 className="font-bold m-3">TOP CATEGORIES</h1>
                <div className='flex gap-4'>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/couple_tees_1.jpg?v=1710485935&width=360"
                        />
                        <CardBody>
                            <button className='font-bold'>
                                UNISEX TEES
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/ddl.jpg?v=1707392624&width=360"
                        />
                        <CardBody>
                            <button className='font-bold'>
                                OVERSIZED TEES
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/short.jpg?v=1707478707&width=360"
                        />
                        <CardBody>
                            <button className='font-bold'>
                                SHORTS
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/8446.jpg?v=1715068145"
                        />
                        <CardBody>
                            <button className='font-bold'>
                                VESTS
                            </button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='image w-full p-4 relative'>
                <img src={backgroundimg} className='rounded w-full h-[500px] ' />
                <div className='absolute left-10 top-10 flex justify-center gap-1 items-center w-full '>
                    <div className=''><h1 className="font-bold text-white text-2xl">THE FLIQSIDE</h1></div>
                    <div className='video'>
                        <video className='w-[350px] h-[450px]' controls><source src={video} /></video>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold'>NEW ARRIVALS</h1>
                <div className='flex gap-3'>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/01_7e35091a-e2f9-4999-a10b-f681f1a26d63.jpg?v=1714738916&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/02_1bfabd0b-7add-4169-8eb7-45a3e9ddc9a9.jpg?v=1714820939&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/05_77c08430-b865-45e4-b3af-30942604337f.jpg?v=1714734283&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <img
                            alt="Sample"
                            src="https://veirdo.in/cdn/shop/files/5_07767af7-a37f-4923-9bea-fe416dd4b9d4.jpg?v=1712330937&width=360"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Rs.499
                            </CardTitle>
                            <CardText>
                                Originals Beige Oversized Chest Graphic Printed Tshirt
                            </CardText>
                            <hr />
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div>
                <h1 className='p-3 font-bold'>SEE ALL NEW ARRIVALS</h1>
                <div className='image w-full p-4 relative'>
                    <img src={backgroundimg} className='rounded w-full h-[500px] ' />
                    <div className='absolute left-10 top-10 flex justify-center gap-1 '>
                        <div className='w-[350px]'>
                            <h1 className="font-bold text-white text-2xl">ABOUT US</h1>
                            <p className="font-bold text-white">Be bold, be you, be Veirdo! The coolest streetwear brand for Gen-Z is here! Veirdo is all about standing out in the crowd, expressing yourself with creativity and making an uber stylish statement.</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <img className="h-[200px]" src="https://veirdo.in/cdn/shop/files/1_1_d64e47da-3937-4108-bcdc-c35b77c49686.png?v=1707820466&width=360" alt="" />
                            <img className="h-[200px]" src="https://veirdo.in/cdn/shop/files/2_1_719a1499-75ee-476b-ad06-0ad9172512fb.png?v=1707820474&width=360" alt="" />
                            <p></p>
                            <img className="h-[200px]" src="https://veirdo.in/cdn/shop/files/3_4_04c128ea-5d2b-493e-a4cf-34ba6e791134.png?v=1707820474&width=360" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='bg-green-600 p-3'>
                <div className='flex'>
                    <h1 className='font-bold text-white text-2xl'>JOIN OUR VEIRDO FAM</h1>
                    <input type="text" />
                </div>
                <div className='items-start p-3 text-left'>
                    <p className='font-bold'>SPOT US ON</p>
                </div>
                <div>
                    <Table className=' bg-green-600'>
                        <thead>
                            <tr className='border border-black'>
                                <th className=' !bg-green-600 border-r p-3'><div className='flex gap-2 items-center'>
                                    <Instagram />INSTAGRAM</div></th>
                                <th className=' !bg-green-600 border-r p-3'><div className='flex gap-2 items-center'>
                                    <Linkedin />LINKEDIN</div> </th>
                                <th className=' !bg-green-600 border-r p-3'><div className='flex gap-2 items-center'>
                                    <Twitter />TWITTER</div></th>
                                <th className=' !bg-green-600 border-r p-3'><div className='flex gap-2 items-center'>
                                    <MessageCircleMore />WHATSAPP</div></th>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <div className='grid grid-cols-3 m-3'>
                    <div className='Categories '>
                        <p className='font-bold'>CATEGORIES</p>
                        <div className='flex flex-col justify-start mt-3 text-sm'>
                            <a href="">NEW ARRIVALS</a>
                            <a href="">BESTSELLERS</a>
                            <a href="">OVERSIZED T-SHIRTS</a>
                            <a href="">T-SHIRTS</a>
                            <a href="">UNISEX</a>
                            <a href="">SHORTS & JOGGERS</a>
                            <a href="">WINTER-WEAR</a>
                        </div>
                    </div>
                    <div className='Company'>
                        <p className='font-bold'>COMPANY</p>
                        <div className='flex flex-col justify-start mt-3 text-sm'>
                            <a href="">ABOUT-US</a>
                            <a href="">BLOG</a>
                            <a href="">PRIVACY POLICY</a>
                            <a href="">TERMS & CONDITIONS</a>
                            <a href="">WORK WITH US</a>
                        </div>
                    </div>
                    <div className='Customers'>
                        <p className='font-bold'>CUSTOMERS</p>
                        <div className='flex flex-col justify-start mt-3 text-sm'>
                            <a href="">CONTACT US</a>
                            <a href="">FAQs</a>
                            <a href="">SHIPPING POLICY</a>
                            <a href="">REFUND POLICY</a>
                            <a href="">TRACK ORDER</a>
                        </div>
                    </div>
                </div>
                <div>
                    <marquee className="text-yellow-400 font-bold text-[150px]" scrollamount="20">
                        <span>FIND YOUR FLIP SIDE</span>
                        <span>FIND YOUR FLIP SIDE</span>
                    </marquee>
                </div>
            </footer>

        </>
    )
}
