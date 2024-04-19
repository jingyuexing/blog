import { FC, HTMLAttributes } from "react";

interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
}

export const Navigation:FC<NavigationProps> = (props)=>{
    return (
        <div className="sticky-0 w-full flex justify-center items-center">
            { props.children }
        </div>
    )
}
