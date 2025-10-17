import {clsx} from "clsx";
import { twMerge } from "tailwind-merge";


//clsx - multiple classnames applied at once 
//twMerge - to merge them
export const cn  = (...inputs) => {
    return twMerge(clsx(inputs));
}