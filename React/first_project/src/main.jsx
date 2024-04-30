import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// // let head = <h1>Header</h1>;
// // let name = ["Disha", "Urvish", "Vinita"];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <div>
//     <h1>test-1</h1>
//     <h1>test-2</h1>
//     {name.map((e) => {
//       return <h3>{e}</h3>;
//     })}
//   </div>
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
// );

/*
// you can only return on render one element
<h1>test1 </h1>
<h1>test2 </h1>


<div>
<h1>test1 </h1>
<h1>test2 </h1>
</div>

*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App/>
  </div>
);