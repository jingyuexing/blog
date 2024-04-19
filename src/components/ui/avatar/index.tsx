import { FC, HTMLAttributes } from "react"
interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    name: ""
}
export const Avatar: FC<AvatarProps> = (props ) => {
    return (
        <div className="">
            { props.children}
        </div>
    )
}
