import style from "../Input/Input.module.css";


export const Input = () => {
    return (
        <div className={style.wrapper__input}>
            <h1>Введите, пожалуйста, данные: </h1>

            <div className={style.input__block}>
                <h4>Преломляющая сила слабого меридиана роговицы</h4>
                <input id="PWM" />
            </div>

            <div className={style.input__block}>
                <h4>Преломляющая сила сильного меридиана роговицы</h4>
                <input id="PSM" />
            </div>

            <div className={style.input__block}>
                <h4>Длина переднезадней оси</h4>
                <input id="L" />
            </div>

            <div className={style.input__block}>
                <h4>Глубина передней камеры</h4>
                <input id="depth_front_camera" />
            </div>

            <div className={style.input__block}>
                <h4>Оптическая сила ИОЛ</h4>
                <input id="IOL" />
            </div>

            <div className={style.input__block}>
                <h4>Неоптимизированная А-константа</h4>
                <input id="A_not_optimize" />
            </div>

            <div className={style.input__block}>
                <h4>Сферический компонент послеоперационной рефракции</h4>
                <input id="spherical" />
            </div>

            <div className={style.input__block}>
                <h4>Цилиндрический компонент послеоперационной рефракции</h4>
                <input id="cylindrical" />
            </div>
        </div>
    )
}