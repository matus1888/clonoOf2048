import {useEffect, useRef} from "react";
import LineInGameContainer from "./components/LineInGameContainer";
import s from './App.module.css';
import React from 'react'


const App = (props) => {
    const canvasRef = useRef(null);
    const msgBoxRef = useRef(null);
    useEffect(() => {


//Чувствительность — количество пикселей, после которого жест будет считаться свайпом
            const sensitivity = 20;

//Получение поля, в котором будут выводиться сообщения
            const msgBox = msgBoxRef.current;

            let touchStart = null; //Точка начала касания
            let touchPosition = null; //Текущая позиция


//        постановка общего слушателя на  document

            //Перехватываем события
            document.addEventListener("touchstart", function (e) {
                TouchStart(e);
            }); //Начало касания
            document.addEventListener("touchmove", function (e) {
                TouchMove(e);
            }); //Движение пальцем по экрану
//Пользователь отпустил экран
            document.addEventListener("touchend", function (e) {
                TouchEnd(e, "green");
            });


            function TouchStart(e) {
                //Получаем текущую позицию касания
                // console.log('touchstart')
                touchStart = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
                touchPosition = {x: touchStart.x, y: touchStart.y};
            }

            function TouchMove(e) {
                //Получаем новую позицию
                // console.log('touchmove')
                touchPosition = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
            }

            function TouchEnd(e, color) {

                // console.log('touchend')
                CheckAction(); //Определяем, какой жест совершил пользователь

                //Очищаем позиции
                touchStart = null;
                touchPosition = null;
            }

            function CheckAction() {
                // console.log('checkAction')
                let d = //Получаем расстояния от начальной до конечной точек по обеим осям
                    {
                        x: touchStart.x - touchPosition.x,
                        y: touchStart.y - touchPosition.y
                    };

                let msg = ""; //Сообщение

                if (Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
                {
                    if (Math.abs(d.x) > sensitivity) //Проверяем, было ли движение достаточно длинным
                    {
                        if (d.x > 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
                        {
                            msg = "Swipe Left";
                            props.left()
                        } else //Иначе он двигал им слева направо
                        {
                            msg = "Swipe Right";
                            props.right()
                        }
                    }
                } else //Аналогичные проверки для вертикальной оси
                {
                    if (Math.abs(d.y) > sensitivity) {
                        if (d.y > 0) //Свайп вверх
                        {
                            msg = "Swipe up";
                            props.up()
                        } else //Свайп вниз
                        {
                            msg = "Swipe down";
                            props.down()
                        }
                    }
                }

                msgBox.innerText = msg; //Выводим сообщение

            }

            let ret = () => {
                document.removeEventListener("touchstart", function (e) {
                    TouchStart(e);
                });
                //Начало касания
                document.removeEventListener("touchmove", function (e) {
                    TouchMove(e);
                });
                //Движение пальцем по экрану
                //Пользователь отпустил экран
                document.removeEventListener("touchend", function (e) {
                    TouchEnd(e);
                });
            }
            return ret()
        }
    )
    return (<div>
        <canvas ref={canvasRef} className={s.canvas}></canvas>
        <LineInGameContainer/>
        <span ref={msgBoxRef}></span>
    </div>);
}
export default App;
