import React from 'react'

export default function Listview() {
    let name = ["uv", "uj", "up", "us"]
    return (
        <div>
            {name?.map?.((e, i) => {
                return (
                    <div>
                        <li>{e}</li>
                    </div>
                );
            })}
        </div>
    )
}
