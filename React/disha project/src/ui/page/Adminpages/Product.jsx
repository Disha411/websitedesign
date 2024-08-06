import axios from "axios";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";
import Select from "react-select";

const maincategoryselecthandler = [
  { value: "tshirt", label: "tshirt" },
  { value: "shirt", label: "shirt" },
  { value: "jeans", label: "jeans" },
  { value: "trouser", label: "trouser" },
];

const alldata = {
  title: "",
  description: "",
  size: "",
  color: [],
  mainCategory: "",
  price: "",
  thumbnail: "",
  availableStock: "",
  discountPercentage: "",
};

export default function Product() {
  let [flag, setFlag] = useState(true);
  let [productData, setproductData] = useState([]);
  let [limit, setLimit] = useState(10);
  let [count, setCount] = useState(10);
  let [page, setPage] = useState(1);
  let [modal, setModal] = useState(false);
  let [searchText, setsearchText] = useState("")
  let [data, setdata] = useState(alldata);
  let [color, setcolor] = useState([])
  let [size, setsize] = useState([])
  let [id, setId] = useState("")
  let [cookies] = useCookies(["token"]);

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

  const Updatehandler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put(
        `http://localhost:9999/product/update/${id}`,
        {...data,color:color,size:size}
      );
      setdata(alldata);
      toggle()
      refetch()
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
    console.log("🚀 ~ Login ~ data:", data);
  };

  const toggle = () => setModal(!modal);

  const editHandler = (e) => {
    setdata(e)
    setId(e._id)
    setsize(e.size)
    toggle()
    setcolor(e.color)
  }

  const refetch = () => setFlag(!flag);

  const callApiHandler = async () => {
    try {
      let response = await axios.get(
        "http://localhost:9999/product/getAllPaginate",
        {
          params: {
            limit: limit,
            page: page,
            search: searchText
          },
        }
      );
      setproductData(response?.data?.data);
      setCount(response?.data?.count);
    } catch (error) {
      console.log("-----------error----------->", error);
    }
  };

  useEffect(() => {
    callApiHandler();
  }, [flag, limit, page, searchText]);

  const deleteHandler = async (id) => {
    try {
      let response = await axios.delete(
        "http://localhost:9999/product/delete/" + id,
        {
          headers: {
            authorization: "bearer " + cookies.token,
          },
        }
      );
      refetch();
    } catch (error) {
      console.log("-----------  error----------->", error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-between my-3 px-3">
        <h1>Product count : {count}</h1>
        <Input placeholder="Search your text here..." className="w-[250px]" onChange={(e) => (setsearchText(e.target.value),setPage(1))} />
        <div className="flex gap-3">
          <ReactSelect
            options={[
              { label: 5, value: 5 },
              { label: 10, value: 10 },
              { label: 25, value: 25 },
              { label: 50, value: 50 },
            ]}
            onChange={(e) => (setLimit(e.value), setPage(1))}
          />
          <Button onClick={() => navigate("/addproduct-form")}>Add Product</Button>
        </div>
      </div>

      <ReactPaginate
        pageCount={count / limit}
        className="flex gap-3 justify-center my-3"
        activeClassName="bg-black text-white"
        onPageChange={(e) => setPage(e.selected + 1)}
        forcePage={page - 1}
        pageClassName="border py-2 px-3 border-black rounded-full"
      />

      <Table bordered>
        <thead>
          <tr>
            <th className="w-[50px]">Sr</th>
            <th className="w-[50px]">Action</th>
            <th className="w-[50px]">Title</th>
            <th className="w-[50px]">Gender</th>
            <th className="w-[50px]">Price</th>
            <th className="w-[150px]">Images</th>
            <th className="w-[120px]">Discount %</th>
            <th className="w-[30px]">Main Category</th>
            <th>Color</th>
            <th>Size</th>
            <th className="w-[50px]">Available Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {productData?.map?.((e, i) => {
            return (
              <tr>
                <th scope="row">{(page - 1) * limit + i + 1}</th>
                <td>
                  <div>
                    <p
                      onClick={() => deleteHandler(e?._id)}
                      className="cursor-pointer text-red-500 underline"
                    >
                      Delete
                    </p>
                    <p className="cursor-pointer text-blue-500 underline" onClick={() => editHandler(e)}>
                      Edit
                    </p>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>What you want to Edit</ModalHeader>
                      <ModalBody>
                        <div className="mx-3  text-gray">
                          <h1 className="h1 text-center">Update Product</h1>

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
                              checked={size.includes("xs")}
                              onChange={(e) => sizecheckBoxHandler("xs", e)}
                            />
                            XS
                            <Input
                              value={size}
                              type="checkbox"
                              checked={size.includes("s")}
                              onChange={(e) => sizecheckBoxHandler("s", e)}
                            />
                            S
                            <Input
                              value={size}
                              type="checkbox"
                              checked={size.includes("m")}
                              onChange={(e) => sizecheckBoxHandler("m", e)}
                            />
                            M
                            <Input
                              value={size}
                              type="checkbox"
                              checked={size.includes("l")}
                              onChange={(e) => sizecheckBoxHandler("l", e)}
                            />
                            L
                            <Input
                              value={size}
                              type="checkbox"
                              checked={size.includes("xl")}
                              onChange={(e) => sizecheckBoxHandler("xl", e)}
                            />
                            XL
                            <Input
                              value={size}
                              type="checkbox"
                              checked={size.includes("2xl")}
                              onChange={(e) => sizecheckBoxHandler("2xl", e)}
                            />
                            2XL
                            <Input
                              value={size}
                              type="checkbox"
                              checked={size.includes("3xl")}
                              onChange={(e) => sizecheckBoxHandler("3xl", e)}
                            />
                            3XL
                          </div>

                          <label>Color</label>
                          <div className="grid grid-cols-4">
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("red")}
                                onChange={(e) => colorcheckBoxHandler("red", e)}
                              />red
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("yellow")}
                                onChange={(e) => colorcheckBoxHandler("yellow", e)}
                              />yellow
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("black")}
                                onChange={(e) => colorcheckBoxHandler("black", e)}
                              />Black
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("blue")}
                                onChange={(e) => colorcheckBoxHandler("blue", e)}
                              />Blue
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("brown")}
                                onChange={(e) => colorcheckBoxHandler("brown", e)}
                              />Brown
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("gray")}
                                onChange={(e) => colorcheckBoxHandler("gray", e)}
                              />Gray
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("orange")}
                                onChange={(e) => colorcheckBoxHandler("orange", e)}
                              />Orange
                            </div>
                            <div>
                              <Input
                                value={color}
                                type="checkbox"
                                checked={color.includes("green")}
                                onChange={(e) => colorcheckBoxHandler("green", e)}
                              />Green
                            </div>
                          </div>

                          <br />

                          <label>Category</label>
                          <Select
                            value={{ value: data.mainCategory, label: data.mainCategory }}
                            options={maincategoryselecthandler}
                            onChange={(e) => setdata({ ...data, mainCategory: e.value })}
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
                            value={data.thumbnail}
                            type="text"
                            placeholder="Enter a ImageURL"
                            className="bg-slate-100"
                            onChange={(e) => setdata({ ...data, thumbnail: e.target?.value })}
                          />

                          <label>Stock</label>
                          <Input
                            value={data.availableStock}
                            type="text"
                            placeholder="Enter a available stock"
                            className="bg-slate-100"
                            onChange={(e) => setdata({ ...data, availableStock: e.target?.value })}
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
                              className="w-full border-2 border-red-600 text-red-600 bg-white hover:text-red-600 hover:border-red-600"
                              onClick={(e) => Updatehandler(e)}
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                      </ModalBody>
                    </Modal>
                  </div>
                </td>
                <td>{e.title}</td>
                <td>{e.gender}</td>
                <td>{e.price}</td>
                <td>
                  <img className="w-[130px] h-[130px]" src={e?.thumbnail || "https://static.thenounproject.com/png/2932881-200.png"} alt="" onError={(ele) => {
                    ele.target.src = "https://static.thenounproject.com/png/2932881-200.png"
                  }} />
                </td>
                <td>{e.discountPercentage}</td>
                <td>
                  {e.mainCategory}
                </td>
                <td>
                  {e?.color?.map?.((ele) => {
                    return <p>{ele}</p>;
                  })}
                </td>
                <td>
                  {e?.size?.map?.((ele) => {
                    return <p>{ele}</p>;
                  })}
                </td>
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