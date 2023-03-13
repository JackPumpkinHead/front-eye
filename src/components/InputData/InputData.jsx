import style from "./InputData.module.css";
import { useState } from "react";


export const InputData = () => {

    const [pwm, setPwm] = useState('');                   //Преломляющая сила слабого меридиана роговицы
    const [psm, setPsm] = useState('');                   //Преломляющая сила сильного меридиана роговицы
    const [length, setLength] = useState('');             //Длина переднезадней оси
    const [depth, setDepth] = useState('');               //Глубина передней камеры
    const [iol, setIol] = useState('');                   //Оптическая сила ИОЛ
    const [notOptimizeA, setNotOptimizeA] = useState(''); //Неоптимизированная А-константа
    const [spherical, setSpherical] = useState('');       //Сферический компонент послеоперационной рефракции
    const [cylindrical, setCylindrical] = useState('');   //Цилиндрический компонент послеоперационной рефракции
    const [afterOperation, setAfterOperation] = useState('');

    function calc(event) {
        event.preventDefault();
        const after_operation = spherical + 0.5 * cylindrical;
        setAfterOperation(after_operation);

    }

    return (
        <form className={style.wrapper__input}>
            <h1>Введите, пожалуйста, данные: </h1>

            <div className={style.input__block}>
                <h4>Преломляющая сила слабого меридиана роговицы</h4>
                <input type="text"
                       name="PWM"
                       value={ pwm }
                       onChange={(event => setPwm(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Преломляющая сила сильного меридиана роговицы</h4>
                <input type="text"
                       name="PSM"
                       value={ psm }
                       onChange={(event => setPsm(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Длина переднезадней оси</h4>
                <input type="text"
                       name="L"
                       value={ length }
                       onChange={(event => setLength(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Глубина передней камеры</h4>
                <input type="text"
                       name="depth_front_camera"
                       value={ depth }
                       onChange={(event => setDepth(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Оптическая сила ИОЛ</h4>
                <input type="text"
                       name="IOL"
                       value={ iol }
                       onChange={(event => setIol(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Неоптимизированная А-константа</h4>
                <input type="text"
                       name="A_not_optimize"
                       value={ notOptimizeA }
                       onChange={(event => setNotOptimizeA(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Сферический компонент послеоперационной рефракции</h4>
                <input type="number"
                       name="spherical"
                       value={ Number(spherical) }
                       onChange={(event => setSpherical(event.target.value))}
                />
            </div>

            <div className={style.input__block}>
                <h4>Цилиндрический компонент послеоперационной рефракции</h4>
                <input type="number"
                       name="cylindrical"
                       value={ Number(cylindrical) }
                       onChange={(event => setCylindrical(event.target.value))}
                />
            </div>


            <input type="submit" value="Submit" onClick={ calc }/>

            <div className={style.input__block}>
                <div>Послеоперационный сфероэквивалент</div>
                <input type="number"
                       name="after_operation"
                       value={ Number(afterOperation) }
                />
            </div>

        </form>
    )
}