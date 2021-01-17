import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";

const LineInGame = (props) => {
let SideEffect=()=>{
    props.setAnimation()
    setTimeout(()=> props.setCurrentState(),100)


}
    return (<div>
            <div className={s.b}>
                <div className={s.head}>Header
                    <button onClick={SideEffect}>animation phase1</button>
                    <button onClick={props.reset}>Reset animation</button>
                </div>
                <GameFieldContainer/>
            </div>
        </div>
    )
}
export default LineInGame