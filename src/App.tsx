import { FC, InputHTMLAttributes, useState } from 'react'
import { atom, useAtom } from "jotai"
import Card from "@components/ui/card"
import './App.css'
import { Tabs } from './components/ui/tabs'
import { TabsItem } from './components/ui/tabs/TabItems'
import { Navigation } from './components/ui/nagtivate'

// const Counter:FC<{}> = () =>{
//   const [value,setValue] = useState(0)
//   return (
//     <button onClick={() => setValue((value) => value + 1)}>Counter {value} </button>
//   )
// }

// const textAtom = atom("hello world")
// const uppercaseAtom = atom((get)=>get(textAtom).toUpperCase())
// const Input = ()=>{
//   const [text,setText] = useAtom(textAtom)
//   const handlerChange:InputHTMLAttributes<HTMLInputElement>['onChange'] = (e)=>setText(e.target.value)
//   return (
//     <input onChange={handlerChange} value={text} />
//     )
// }

// const Uppercase = ()=>{
//   console.log(atom(0))
//   const [uppercase] = useAtom(uppercaseAtom)
//   console.log(useAtom(uppercaseAtom))
//   return (
//     <div>{uppercase}</div>
//   )
// }

// function App() {
//   const tabs = [
//     "首页",
//     "项目",
//     "图片",
//     "简介"
//   ]
//   return (
//     <>
//       <Tabs>
//         {
//           tabs.map((val) => (<TabsItem key={val}>{val}</TabsItem>))
//         }
//       </Tabs>
//     </>
//   )
// }
function App(){
  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <Navigation>
        wh hhh
      </Navigation>
    </div>
  )
}
export default App
