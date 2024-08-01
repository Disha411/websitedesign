import axios from "axios";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";

export default function Product() {
  let [flag, setFlag] = useState(true);
  let [productData, setproductData] = useState([]);
  let [limit, setLimit] = useState(10);
  let [count, setCount] = useState(10);
  let [page, setPage] = useState(1);
  let [modal, setModal] = useState(false);
  let [searchText, setsearchText] = useState("")

  const toggle = () => setModal(!modal);

  console.log("-----------  count----------->", count);

  const refetch = () => setFlag(!flag);

  let [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

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
        <Input placeholder="Search your text here..." className="w-[250px]" onChange={(e) => setsearchText(e.target.value)} />
        <div className="flex gap-3">
          <ReactSelect
            options={[
              { label: 5, value: 5 },
              { label: 10, value: 10 },
              { label: 25, value: 25 },
              { label: 50, value: 50 },
            ]}
            onChange={(e) => (setLimit(e.value),setPage(1))}
          />
          <Button onClick={() => navigate("/addproduct-form")}>Add Product</Button>
        </div>
      </div>

      <ReactPaginate
        pageCount={count / limit}
        className="flex gap-3 justify-center my-3"
        activeClassName="bg-black text-white"
        onPageChange={(e) => setPage(e.selected + 1)}
        forcePage={page-1}
        pageClassName="border py-2 px-3 border-black rounded-full"
      />

      <Table bordered>
        <thead>
          <tr>
            <th className="w-[50px]">Sr</th>
            <th className="w-[50px]">Action</th>
            <th className="w-[50px]">Title</th>
            <th className="w-[50px]">Brand</th>
            <th className="w-[50px]">Gender</th>
            <th className="w-[50px]">Price</th>
            <th>Images</th>
            <th className="w-[150px]">Thumbnail</th>
            <th className="w-[25px]">Discount %</th>
            <th className="w-[30px]">Category</th>
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
                    <p className="cursor-pointer text-blue-500 underline" onClick={toggle}>
                      Edit
                    </p>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>What you want to Edit</ModalHeader>
                      <ModalBody>
                        Edit or not
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                          Do Something edit
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </td>
                <td>{e.title}</td>
                <td>{e.brand}</td>
                <td>{e.gender}</td>
                <td>{e.price}</td>
                <td>
                  <img className="h-[50px]" src={e.image} alt="" srcset="" />
                </td>
                <td>
                  <img className="w-[130px] h-[130px]" src={e.thumbnail} alt="" />
                </td>
                <td>{e.discountPercentage}</td>
                <td>
                  {e?.category?.map?.((e) => {
                    return <p>{e}</p>
                  })}
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