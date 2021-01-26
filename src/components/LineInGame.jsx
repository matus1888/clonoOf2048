import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {DOWN, getMatrixOnState, LEFT, RIGHT, RIGHT_ANAMATION_STEP_ONE, testRowSlide, UP} from "../redux/logic";
import {shiftRowGetAnimationOnePhase, testRowAnimationSlidePhaseOne} from "../redux/animationLogic";

class LineInGame extends React.Component {

    render() {
        let testAnimationPhaseOne = () => {
            testRowAnimationSlidePhaseOne()
        }
// let SideEffect=()=> {
//     props.setAnimation()
//     setTimeout(() => props.setCurrentState(), 100)
// }
        let rightKey = () => {
            this.props.setCurrentState(RIGHT_ANAMATION_STEP_ONE(this.props.main))
            // props.setCurrentState(RIGHT(props.main))
        }
        let leftKey = () => {
            this.props.setCurrentState(LEFT(this.props.main))
        }
        let upKey = () => {
            console.log('нажали up')
            this.props.setCurrentState(UP(this.props.main))
        }
        let downKey = () => {
            this.props.setCurrentState(DOWN(this.props.main))
        }
        let testAnimationOneRowVisible = () => {
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    for (let z = 0; z < 3; z++) {
                        for (let c = 0; c < 3; c++) {
                            let rowTest = {
                                one: x * 2,
                                two: y * 2,
                                three: z * 2,
                                four: c * 2
                            }
                            let animationRow = shiftRowGetAnimationOnePhase(rowTest)
                            console.log(rowTest)
                            this.props.setCurrentState({
                                ...this.props.main, oneRaw: {
                                    one: {
                                        value: rowTest.one,
                                        anime: animationRow.one,
                                        timeout: this.props.main.oneRaw.one.timeout
                                    },
                                    two: {
                                        value: rowTest.two,
                                        anime: animationRow.two,
                                        timeout: this.props.main.oneRaw.two.timeout
                                    },
                                    three: {
                                        value: rowTest.three,
                                        anime: animationRow.three,
                                        timeout: this.props.main.oneRaw.three.timeout
                                    },
                                    four: {
                                        value: rowTest.four,
                                        anime: animationRow.four,
                                        timeout: this.props.main.oneRaw.four.timeout
                                    },
                                }
                            })

                        }
                    }
                }
            }
        }
        return (<div>
                <div className={s.b}>
                    <div className={s.head}>Header
                        <button onClick={testAnimationOneRowVisible}>testAnimationOneRowVisible</button>
                        <button onClick={rightKey}>test on RIGHT KEY</button>
                        <button onClick={leftKey}>test on LEFT KEY</button>
                        <button onClick={upKey}>test on UP KEY</button>
                        <button onClick={downKey}>test on Down KEY</button>
                        <button onClick={this.props.reset}>Reset animation</button>
                    </div>
                    <GameFieldContainer/>
                </div>
            </div>
        )
    }
}

export default LineInGame