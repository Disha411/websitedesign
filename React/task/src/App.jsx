import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task1 from './1.Task1/Task1'
import Task2 from './2.Task2/Task2'
import Task3 from './3.Task3/Task3'
import Task4 from './4.Task4/Task4'
import Funprops from './5.Task5(props)/Funprops'
import InputCom from './6.Task6(input)/InputCom'
import Countertask from './CounterTask/Countertask'
import MultiInput from './6.Task6(input)/MultiInput'
import Register from './newtask/Register'
import Crud from './6.Task6(input)/Crud'

export default function App() {
  return (
    <div>
      {/* <Task1/> */}
      {/* <Task2/> */}
      {/* <Task3/> */}
      {/* <Task4/> */}
      {/* <Funprops/> */}
      <Crud/>
      {/* <InputCom/> */}
      {/* <MultiInput/> */}
      {/* <Countertask/> */}
      {/* <Register/> */}
    </div>
  )
}
