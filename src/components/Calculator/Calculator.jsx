import style from "./Calculator.module.css";
import { InputData } from "../InputData/InputData";
import { OutputData } from "../OutputData/OutputData";

export const Calculator = () => {
    return (
        <div className={style.wrapper}>
            <InputData />
            <OutputData />
        </div>
    )
}