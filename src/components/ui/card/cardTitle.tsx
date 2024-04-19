import { mergeClass } from "../utils";
import { context } from "./index";
export function CardTitle(props) {
    return (
        <context.Consumer>
            <div
                className={`${mergeClass(
                    "flex items-center text-base",
                    props.className,
                )}`}
            >
                {(card)=>(
                   <div>{card.title}</div> 
                )}
            </div>
        </context.Consumer>
    );
}
