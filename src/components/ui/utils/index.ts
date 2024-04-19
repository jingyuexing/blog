import React from "react"
export type ComponentUI<Props> = React.ComponentType<Props>

export type BaseComponent = React.ReactElement

export const mergeClass=(base = "",target = "")=>{
    return [...new Set([...base.split(" "),...target.split(" ")])].join(" ")
}
