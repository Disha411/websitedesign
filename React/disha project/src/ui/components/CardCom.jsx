import { Heart } from "lucide-react";
import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CardCom({ product }) {
  return (
    <div>
      {" "}
      <Card className="rounded-xl p-0">
        <img
          className="rounded-xl m-2 h-[350px] cursor-pointer"
          alt="Sample"
          src={product?.thumbnail || "https://static.thenounproject.com/png/2932881-200.png"} onError={(ele) => {
            ele.target.src = "https://static.thenounproject.com/png/2932881-200.png"
          }}
        />
        <CardBody className="p-0">
          <div className="px-2">
          <CardTitle tag="h5" className="mb-1 h5">
              {product?.mainCategory}
            </CardTitle>
            <CardTitle tag="h5" className="mb-1 h4 text-blue-600">
              {product?.price}₹
            </CardTitle>
            <CardText className="text-sm truncate mb-1">
              {product?.description}
            </CardText>
          </div>
          <div className="border-t border-gray-300">
            <div className="flex  justify-between items-center">
              <div className=" hover:text-gray-400 font-bold flex justify-center items-center cursor-pointer w-[80%]">
                ADD TO CART
              </div>
              <div className="group cursor-pointer border-l p-2 border-gray-300 flex justify-center w-[20%] items-center">
                <Heart className="group-hover:text-red-500 group-hover:fill-red-500" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
