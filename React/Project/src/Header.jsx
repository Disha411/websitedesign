import React from 'react'
import logoImg from "./Images/logo.svg"
import { Button, Card, CardBody, CardText, CardTitle, Input, UncontrolledCarousel } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Heart, Search, ShoppingCart, User } from 'lucide-react'


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
                            <button className='font-bold'>
                                ADD TO CART<Heart />
                            </button>
                        </CardBody>
                    </Card>
                </div>
                <Button className='bg-green-600'>SEE MORE BESTSELLERS</Button>
                <h1>TOP CATEGORIES</h1>
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

        </>
    )
}
