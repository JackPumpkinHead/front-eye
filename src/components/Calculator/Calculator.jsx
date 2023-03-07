import style from "./Calculator.module.css";
import {Input} from "../Input/Input";
import {Output} from "../Output/Output";

export const Calculator = () => {
    return (
        <div className={style.wrapper}>
            <Input />
            <Output />
        </div>
    )
}