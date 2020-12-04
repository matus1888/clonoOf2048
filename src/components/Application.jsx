import React from 'react';
import s from './Application.module.css'
import GameC from "./logic/GameC";


const Application = ()=>{
    return (<div className={s.root}>
                <div className={s.header}></div>
                <div className={s.body1}></div>
                <div className={s.body2}></div>
                <GameC />
                <div className={s.footer}></div>
            </div>
    )
}
export default Application