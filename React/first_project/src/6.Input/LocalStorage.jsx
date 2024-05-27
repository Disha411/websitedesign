import React from 'react'

export default function LocalStorage() {
  return (
    <div>LocalStorage</div>
  )
}
// to store data =>  localStorage.setItem("key name","data in string")
// to update data =>  localStorage.setItem("key name which key you want to update","new data in string")
// remove one key => localStorage.removeItem("key name")
// remove all key => localStorage.clear()
// to get data => localStorage.getItem("key name")