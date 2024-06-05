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
import ProjectUseEffect from './8.hook/ProjectUseEffect'
import ApiCall from './6.Input/ApiCall'
import UseEffectCom from './8.hook/UseEffectCom'
import InputLocal from './6.Input/InputLocal'
import MainCom from './8.hook/usecontext/MainCom'


export default function App() {
  return (
    <div className='d-flex justify-center mt-5'>
      {/* <Component/> */}
      {/* <States /> */}
      {/* <Style/> */}
      {/* <FunProps/> */}
      {/* <MapKeyCom/> */}
      {/* <FragmentCom/> */}
      {/* <ApiCall/> */}
      {/* <InputCom/> */}
      {/* <InputLocal/> */}
      {/* <LocalStorage /> */}
      {/* <Multiinput/> */}
      {/* <ConditonalCom/> */}
      <MainCom/>
      {/* <ProjectUseEffect/> */}
      {/* <UseEffectCom/> */}
      {/* <UseReducer/> */}
      {/* <UseRefCom/> */}
    </div>
  )
}
