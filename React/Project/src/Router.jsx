import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Best_Sellers from './Best_Sellers'
import New_arrivals from './New_arrivals'
import Oversized_tshirts from './Oversized_tshirts'
import All_categories from './All_categories'
import Merchandise from './Merchandise'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/Best_Sellers' element={<Best_Sellers />} />
                    <Route path='/New_arrivals' element={<New_arrivals />} />
                    <Route path='/Oversized_tshirts' element={<Oversized_tshirts />} />
                    <Route path='/All_categories' element={<All_categories />} />
                    <Route path='/Merchandise' element={<Merchandise />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
