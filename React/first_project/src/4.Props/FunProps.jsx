import React from 'react'
import ChildCom from './ChildCom'

export default function FunProps() {
    const user1 = "Disha"
    const user2 = "Sanju"
    return (
        <div>
            <ChildCom person={user1} age={23} address={{ city: "surat", pin: "395007" }} />
            <ChildCom person={user2} age={20} address={{ city: "navsari", pin: "396770" }} />
        </div>
    )
}


