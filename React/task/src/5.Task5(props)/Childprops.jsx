import React from 'react'

export default function Childprops({ user1 }) {
    return (
        <div>
            <h1>My name is {user1?.name}</h1>
            <h1>Age :{user1?.age}</h1>
            <h1>Address : my city is {user1?.address?.city} & state:{user1?.address?.state}</h1>
            <h1>My hobby is: {user1?.hobby.map((e, i) => {
                return (
                    <div style={{display:"grid",gridTemplateColumns:"repeat(2)"}}>
                        {i+1}
                        {e}
                    </div>
                )
            }
            )}</h1>

        </div>
    )
}
