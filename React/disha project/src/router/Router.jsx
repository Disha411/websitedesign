import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Best_Sellers from "../ui/page/Best_Sellers";
import New_arrivals from "../ui/page/New_arrivals";
import Oversized_tshirts from "../ui/page/Oversized_tshirts";
import All_categories from "../ui/page/All_categories";
import Merchandise from "../ui/page/Merchandise";
import Header from "../ui/components/Header";
import Home from "../ui/page/Home";
import Footer from "../ui/components/Footer";
import Login from "../ui/page/Login";
import Registration from "../ui/page/Registration";
import AddProductForm from "../ui/page/Adminpages/AddProductForm";
import Product from "../ui/page/Adminpages/Product";
import User from "../ui/page/Adminpages/User";
import Order from "../ui/page/Adminpages/Order";
import Error404 from "../ui/page/Error404";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/best_Sellers" element={<Best_Sellers />} />
          <Route path="/new_arrivals" element={<New_arrivals />} />
          <Route path="/oversized_tshirts" element={<Oversized_tshirts />} />
          <Route path="/all_categories" element={<All_categories />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct-form" element={<AddProductForm />} />
          <Route path="/user" element={<User />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
