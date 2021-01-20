import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {DOWN, getMatrixOnState, LEFT, RIGHT, testRowSlide, UP} from "../redux/logic";

const LineInGame = (props) => {
let SideEffect=()=> {
    props.setAnimation()
    setTimeout(() => props.setCurrentState(), 100)
}
 let rightKey=()=>{
    props.setCurrentState(RIGHT(props.main))
}
 let leftKey=()=>{
    props.setCurrentState(LEFT(props.main))
}
let upKey=()=>{
    console.log('нажали up')
        props.setCurrentState(UP(props.main))
    }
let downKey=()=>{
        props.setCurrentState(DOWN(props.main))
    }
    return (<div>
            <div className={s.b}>
                <div className={s.head}>Header
                    <button onClick={SideEffect}>animation phase1</button>
                    <button onClick={rightKey}>test on RIGHT KEY</button>
                    <button onClick={leftKey}>test on LEFT KEY</button>
                    <button onClick={upKey}>test on UP KEY</button>
                    <button onClick={downKey}>test on Down KEY</button>
                    <button onClick={props.reset}>Reset animation</button>
                </div>
                <GameFieldContainer/>
            </div>
        </div>
    )
}
export default LineInGame