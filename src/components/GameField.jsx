import s from "./LineInGame.module.css";
import Cell from "./Cell";
import React from "react";

const GameField=(props)=>{
            return (<div className={s.bodyField}>
                <div className={s.rowStyle}>
                    <Cell value={props.currentState.oneRaw.one} animation={props.animationObject.oneRaw.one===1?true:false}/>
                    <Cell value={props.currentState.oneRaw.two} animation={props.animationObject.oneRaw.two===1?true:false}/>
                    <Cell value={props.currentState.oneRaw.three} animation={props.animationObject.oneRaw.three===1?true:false}/>
                    <Cell value={props.currentState.oneRaw.four} animation={props.animationObject.oneRaw.four===1?true:false}/>
                </div>
                <div className={s.rowStyle}>
                    <Cell value={props.currentState.twoRaw.one} animation={props.animationObject.twoRaw.one===1?true:false}/>
                    <Cell value={props.currentState.twoRaw.two} animation={props.animationObject.twoRaw.two===1?true:false}/>
                    <Cell value={props.currentState.twoRaw.three} animation={props.animationObject.twoRaw.three===1?true:false}/>
                    <Cell value={props.currentState.twoRaw.four} animation={props.animationObject.twoRaw.four===1?true:false}/>
                </div>
                <div className={s.rowStyle}>
                    <Cell value={props.currentState.threeRaw.one} animation={props.animationObject.threeRaw.one===1?true:false}/>
                    <Cell value={props.currentState.threeRaw.two} animation={props.animationObject.threeRaw.two===1?true:false}/>
                    <Cell value={props.currentState.threeRaw.three} animation={props.animationObject.threeRaw.three===1?true:false}/>
                    <Cell value={props.currentState.threeRaw.four} animation={props.animationObject.threeRaw.four===1?true:false}/>
                </div>
                <div className={s.rowStyle}>
                    <Cell value={props.currentState.fourRaw.one} animation={props.animationObject.fourRaw.one===1?true:false}/>
                    <Cell value={props.currentState.fourRaw.two} animation={props.animationObject.fourRaw.two===1?true:false}/>
                    <Cell value={props.currentState.fourRaw.three} animation={props.animationObject.fourRaw.three===1?true:false}/>
                    <Cell value={props.currentState.fourRaw.four} animation={props.animationObject.fourRaw.four===1?true:false}/>
                </div>
            </div>)
        }


export default GameField