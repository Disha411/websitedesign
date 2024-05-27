import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './1.Component/Component'
import States from './2.States/States'
import Style from './3.Style/Style'
import FunProps from './4.Props/FunProps'
import MapKeyCom from './5.MapKey/MapKeyCom'
import FragmentCom from './5.MapKey/FragmentCom'
import InputCom from './6.Input/InputCom'
import Multiinput from './6.Input/Multiinput'
import ConditonalCom from './7.ConditionalRender/ConditonalCom'
import LocalStorage from './6.Input/LocalStorage'
import UseReducer from './8.hook/UseReducer'
import UseRefCom from './8.hook/UseRefCom'


export default function App() {
  return (
    <div className='d-flex justify-center mt-5'>
      {/* <Component/> */}
      {/* <States /> */}
      {/* <Style/> */}
      {/* <FunProps/> */}
      {/* <MapKeyCom/> */}
      {/* <FragmentCom/> */}
      {/* <InputCom/> */}
      {/* <LocalStorage /> */}
      {/* <Multiinput/> */}
      {/* <ConditonalCom/> */}
      {/* <UseReducer/> */}
      <UseRefCom/>
    </div>
  )
}
