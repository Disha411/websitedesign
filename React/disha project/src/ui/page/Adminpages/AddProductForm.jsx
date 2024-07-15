import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Input } from "reactstrap";

const categoryselecthandler = [
  { value: "Shirts", label: "Shirts" },
  { value: "Jackets", label: "Jackets" },
  { value: "Hoodies", label: "Hoodies" },
  { value: "Full sleeve", label: "Full sleeve" },
];

const alldata = {
  title: "",
  description: "",
  size: "",
  color: [],
  category: "",
  price: "",
  image: "",
  stock: "",
  discountPercentage: "",
};


export default function AddProductForm() {
  let [data, setdata] = useState(alldata);
  let [color, setcolor] = useState([])
  let [size, setsize] = useState([])

  const navigate = useNavigate();

  const sizecheckBoxHandler = (value, e) => {
    if (e.target.checked) {
      setsize([...size, value]);
    } else {
      let filterData = size.filter((e) => e !== value);
      setsize(filterData);
    }
  };

  const colorcheckBoxHandler = (value, e) => {
    if (e.target.checked) {
      setcolor([...color, value]);
    } else {
      let filterData = color.filter((e) => e !== value);
      setcolor(filterData);
    }
  };

  const Submithandler = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post(
        "http://localhost:9999/product/create",
        data
      );
      setdata(alldata);
      navigate("/product");
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
    console.log("🚀 ~ Login ~ data:", data);
  };

  return (
    <div className=" w-[400px] m-auto mt-5 p-3 text-gray">
      <h1 className="h1 text-center">Product Form</h1>

      <label>Title</label>
      <Input
        value={data.title}
        type="text"
        placeholder="Enter a title"
        className="bg-slate-100"
        onChange={(e) => setdata({ ...data, title: e.target?.value })}
      />

      <label>Description</label>
      <Input
        value={data.description}
        type="text"
        placeholder="Enter a Description"
        className="bg-slate-100"
        onChange={(e) => setdata({ ...data, description: e.target?.value })}
      />

      <label>size</label>
      <div className="flex gap-2">

        <Input
          value={size}
          type="checkbox"
          checked={size.includes("S")}
          onChange={(e) => sizecheckBoxHandler("S", e)}
        />
        S
        <Input
          value={size}
          type="checkbox"
          checked={size.includes("M")}
          onChange={(e) => sizecheckBoxHandler("M", e)}
        />
        M
        <Input
          value={size}
          type="checkbox"
          checked={size.includes("L")}
          onChange={(e) => sizecheckBoxHandler("L", e)}
        />
        L
        <Input
          value={size}
          type="checkbox"
          checked={size.includes("XL")}
          onChange={(e) => sizecheckBoxHandler("XL", e)}
        />
        XL
      </div>


      <label>Color</label>
      <div className="flex gap-2">

        <Input
          value={color}
          type="checkbox"
          checked={color.includes("red")}
          onChange={(e) => colorcheckBoxHandler("red", e)}
        />red

        <Input
          value={color}
          type="checkbox"
          checked={color.includes("yellow")}
          onChange={(e) => colorcheckBoxHandler("yellow", e)}
        />yellow

        <Input
          value={color}
          type="checkbox"
          checked={color.includes("black")}
          onChange={(e) => colorcheckBoxHandler("black", e)}
        />black

        <Input
          value={color}
          type="checkbox"
          checked={color.includes("White")}
          onChange={(e) => colorcheckBoxHandler("White", e)}
        />White
      </div>

      <br />

      <label>Category</label>
      <Select
        value={{ value: data.category, label: data.category }}
        options={categoryselecthandler}
        onChange={(e) => setdata({ ...data, category: e.value })}
      />

      <label>Price</label>
      <Input
        value={data.price}
        type="number"
        placeholder="Enter a Price"
        className="bg-slate-100"
        onChange={(e) => setdata({ ...data, price: e.target?.value })}
      />

      <label>Image</label>
      <Input
        value={data.image}
        type="text"
        placeholder="Enter a ImageURL"
        className="bg-slate-100"
        onChange={(e) => setdata({ ...data, image: e.target?.value })}
      />

      <label>Stock</label>
      <Input
        value={data.stock}
        type="text"
        placeholder="Enter a available stock"
        className="bg-slate-100"
        onChange={(e) => setdata({ ...data, stock: e.target?.value })}
      />

      <label>Discount</label>
      <Input
        value={data.discountPercentage}
        type="text"
        placeholder="Enter a discount"
        className="bg-slate-100"
        onChange={(e) => setdata({ ...data, discountPercentage: e.target?.value })}
      />

      <div className="text-center mt-3">
        <Button
          className="border-2 border-red-600 text-red-600 bg-white hover:text-red-600 hover:border-red-600"
          onClick={(e) => Submithandler(e)}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

/*
{
    "gender": "kids",
    "title": "Nike airJordan--disha",
    "description": "shose with comfort",
    "price": 19991,
    "discountPercentage": 10,
    "availableStock": 102,
    "brand": "nike",
    "mainCategory",
    "category": ["casual", "highlength"],
    "thumbnail": "url",
    "color": ["black","white"],
    "size": ["45","44","43","42"]
  }

*/
