import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';

export default function Product() {
  let [productData, setproductData] = useState([])
  console.log("🚀 ~ Product ~ productData:", productData)

  const callApiHandler = async () => {
    let response = await axios.get("http://localhost:9999/product/getAll");
    setproductData(response.data.data);
  };

  useEffect(() => {
    callApiHandler();
  }, []);

  return (

    <div>
      <Table bordered>
        <thead>
          <tr >
            <th className='w-[50px]'>Sr</th>
            <th className='w-[50px]'>Title</th>
            <th className='w-[50px]'>Description</th>
            <th className='w-[50px]'>Brand</th>
            <th className='w-[50px]'>Gender</th>
            <th className='w-[50px]'>Price</th>
            <th>Images</th>
            <th>Thumbnail</th>
            <th>Discount %</th>
            <th className='w-[30px]'>Category</th>
            <th>Color</th>
            <th>Size</th>
            <th className='w-[50px]'>Available Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((e, i) => {
            console.log("-----------  e----------->", e);
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{e.brand}</td>
                <td>{e.gender}</td>
                <td>{e.price}</td>
                <td>
                  <img className="h-[50px]" src={e.image} alt="" srcset="" />
                </td>
                <td>
                  <img src={e.thumbnail} alt="" />
                </td>
                <td>{e.discountPercentage}</td>
                <td>{e.category.map((e) => {
                  return <p>{e}</p>
                })}</td>
                <td>{e.color.map((ele) => {
                  return <p>{ele},</p>
                })}</td>
                <td>{e.size.map((ele) => {
                  return <p>{ele},</p>
                })}</td>
                <td>{e.availableStock}</td>
                <td>{e.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}


