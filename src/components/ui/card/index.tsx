import React, { FC } from "react";
import { mergeClass } from "../utils";
import { CardContext } from "./cardContext";

interface CardProps {
    className?: string;
    children?: React.JSX.Element;
}

export const context = CardContext({ title: "" });

const Card: FC<CardProps> = ({ children, className = "" }) => {
    return (
        <context.Provider
            value={{
                title: "nice world",
            }}
        >
            <div
                className={`${mergeClass(
                    "shadow-sm rounded-md bg-white p-1 w-full",
                    className,
                )}`}
            >
                {children}
            </div>
        </context.Provider>
    );
};

export default Card;
