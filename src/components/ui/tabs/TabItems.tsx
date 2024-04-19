import { Dispatch, FC, HTMLAttributes, MouseEventHandler, SetStateAction, createContext, useContext, useState } from "react";

interface TabsItemProps extends HTMLAttributes<HTMLDivElement> {}

export const TabsContext = createContext<{
    value: {
        width: number,
        height: number,
        offset: number
    },
    setValue: Dispatch<SetStateAction<{
        width: number,
        height: number,
        offset: number
    }>>
}>({
    value: {
        width: 0,
        height: 0,
        offset: 0
    },
    setValue: null
})
export const TabsItem: FC<TabsItemProps> = ({ children, onClick = null, className = "" }) => {
    const { setValue } = useContext(TabsContext)
    const hover: MouseEventHandler<HTMLDivElement> = (e) => {
        setValue({
            width: (e.target as HTMLDivElement).clientWidth,
            height: ((e.target as HTMLDivElement).clientHeight),
            offset: (e.target as HTMLDivElement).offsetLeft
        })
    }
    const selected: MouseEventHandler<HTMLDivElement> = (e) => {
        const allBrotherNodes = (e.target as HTMLDivElement).parentElement?.childNodes as NodeListOf<HTMLDivElement>
        if (allBrotherNodes) {
            allBrotherNodes.forEach((ele) => {
                (ele as HTMLDivElement).removeAttribute("aria-label")
            })
        }
        if (onClick) {
            onClick(e)
        }
        (e.target as HTMLDivElement).ariaLabel = "active-tabs"
        console.log("clicked")
    }
    return (
        <div onMouseEnter={hover} onClick={selected} className={`tabs-item flex select-none relative justify-center items-center px-6 py-3 text-black dark:text-white rounded-full ${className}`}>
            {children}
        </div>
    )
}
