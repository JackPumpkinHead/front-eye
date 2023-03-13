import style from "./OutputData.module.css";


export const OutputData = () => {
    return (
        <div className={style.wrapper__output}>
            <h1>Результат: </h1>

            <div className={style.output__block}>
                <h4>Оптимизированная А-константа</h4>
                <input id="A_optimize" />
            </div>

            <div className={style.output__block}>
                <h4>Средняя преломляющая сила роговицы</h4>
                <input id="K" />
            </div>

            <div className={style.output__block}>
                <h4>r</h4>
                <input id="r" />
            </div>

            <div className={style.output__block}>
                <h4>Lcor</h4>
                <input id="Lcor" />
            </div>

            <div className={style.output__block}>
                <h4>C<sub>w</sub></h4>
                <input id="Cw" />
            </div>

            <div className={style.output__block}>
                <h4>H</h4>
                <input id="H" />
            </div>

            <div className={style.output__block}>
                <h4>ACDconst</h4>
                <input id="ACDconst" />
            </div>

            <div className={style.output__block}>
                <h4>Offset</h4>
                <input id="Offset" />
            </div>

            <div className={style.output__block}>
                <h4>ACDest</h4>
                <input id="ACDest" />
            </div>

            <div className={style.output__block}>
                <h4>RETHICK</h4>
                <input id="RETHICK" />
            </div>

            <div className={style.output__block}>
                <h4>LOPT</h4>
                <input id="LOPT" />
            </div>

            <div className={style.output__block}>
                <h4>Расчетная рефракция</h4>
                <input id="IOLamet" />
            </div>

            <div className={style.output__block}>
                <h4>Оптимизированная рефракция SRK/T</h4>
                <input id="REFX" />
            </div>

            <div className={style.output__block}>
                <div>Послеоперационный сфероэквивалент</div>
                    <input id="after_operation" />
            </div>
        </div>
    )
}