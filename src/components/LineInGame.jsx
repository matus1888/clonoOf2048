import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./GameFieldContainer";

const LineInGame = (props) => {
    let setEffect=()=>{
         props.setAnimation();
         props.setCurrentState();
    }
    return (<div>
            <div className={s.b}>
                <div className={s.head}>Header
                    <button onClick={setEffect}>анимация</button>
                    <button onClick={props.reset}>сброс</button>
                </div>
                <GameFieldContainer/>
            </div>
        </div>
    )
}
export default LineInGame