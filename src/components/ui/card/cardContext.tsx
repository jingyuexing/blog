import { createContext } from "react"

interface CardContext {
    title:string
}
export const CardContext = ({title = ""}:CardContext)=>{
    return createContext({title} as CardContext)
}