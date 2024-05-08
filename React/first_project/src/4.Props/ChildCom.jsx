import React from 'react'

/*
export default function ChildCom(props) {
    console.log(props);

    // We can't change props value.  ex-props.age =900;
    //parent to data in child(transfer data parent to child)
    return (
      <div>
        <h1>Hello {props?.person}</h1>
         <h1>Age is {props?.age}</h1>
     </div>
)
}
*/

export default function ChildCom({ person, age , address }) {
    return (
        <div>
            <h1>Hello {person}</h1>
            <h1>Age is {age}</h1>
            <h1>city:{address?.city} pincode :{address?.pin}</h1>
        </div>
    )
}
