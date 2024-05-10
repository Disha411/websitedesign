import React, { useState } from "react";
import {Button,Input} from "reactstrap";

export default function InputCom() {
  let [name, setName] = useState("");
  let [nameArr, setNameArr] = useState([]);
  console.log("-----------  nameArr----------->", nameArr);

  const getData = (e) => {
    setName(e.target.value);
  };

  const addNameHandler = () => {
    console.log("-=-=-=-=");
    setNameArr([...nameArr, name]);
    setName("");
  };

  return (
    <div className="justify-center text-center">
      <h1>Name : {name}</h1>
      <input
        value={name}
        className="w-250 ring"
        placeholder="Enter your name"
        onChange={(e) => getData(e)}
      />
      <br />
      <button className="border-red-500 text-white bg-red-500 mt-3"   onClick={() => addNameHandler()}>Submit</button>
      <hr />
      {nameArr?.map((e) => {
        return (
          <div>
            <li>{e}</li>
          </div>
        );
      })}
    </div>
  );
}