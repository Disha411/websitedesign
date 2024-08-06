import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardCom from '../components/CardCom';


export default function Best_Sellers() {
  let [productData, setProductData] = useState([]);
  // console.log("-----------  productData----------->", productData);

  useEffect(() => {
    const callapihandler = async () => {
      let response = await axios.get("http://localhost:9999/product/getAll");
      console.log("-----------  response----------->", response.data.data);
      setProductData(response.data.data);
    }
    callapihandler()
  }, [])
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 mx-16">
        {productData.map((product, i) => {
          return (
            <div className=''>
              <CardCom key={i} product={product} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
