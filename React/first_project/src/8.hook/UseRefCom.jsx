import { Button } from 'reactstrap';
import React, { useRef } from 'react'

export default function UseRefCom() {
    const inputRef = useRef()
    const divRef = useRef()

    const focusInput = () => {
        // inputRef.current.value = "Disha";
        inputRef.current.focus();
    }

    const changeColor = () => {
        divRef.current.style.backgroundColor = "red"
    }
    return (
        <div>
            <input type="text" className='border shadow-md' ref={inputRef} />
            <button onClick={() => focusInput()}>Focus to input</button>
            <hr />

            <div ref={divRef} className="w-[100px] h-[100px] border"></div>
            <Button onClick={() => changeColor()}>Focus to input</Button>
        </div>
    )
}
