import { FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import { TabsContext } from "./TabItems";


interface TabsProps extends HTMLAttributes<HTMLDivElement> {}
export const Tabs: FC<TabsProps> = ({ children, className = "" }) => {
    const [value, setValue] = useState({
        width: 0,
        height: 0,
        offset: 0,
    })
    const root = useRef<HTMLDivElement>(null)
    useEffect(() => {
        root.current?.style.setProperty("--left", `${value.offset}px`)
        root.current?.style.setProperty("--height", `${value.height}px`)
        root.current?.style.setProperty("--width", `${value.width}px`)
    }, [value])
    return (
        <TabsContext.Provider value={{ value, setValue }}>
            <div ref={root} className={`tabs flex relative w-full items-center overflow-hidden gap-3 shadow-2xl shadow-[#d7d7d7]/40 bg-white p-3 rounded-full after:absolute after:left-[var(--left)] after:w-[var(--width)] after:rounded-full after:h-[var(--height)] after:bg-[#8f8f8f]/40 after:duration-400 after:ease-linear after:transition-[0.6s] after:backdrop-blur-8 after:pointer-events-none ${className}`}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};
