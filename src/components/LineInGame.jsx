import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {DOWN, LEFT, RIGHT, rowSlide, UP} from "../redux/logic";
import {shiftRowGetAnimationOnePhase, shiftRowGetAnimationTwoPhase} from "../redux/animationLogic";
import testMassive from "./testMassive";


//todo   на основе имеющихся данных и logics реализовать полностью рабочие кнопки
class LineInGame extends React.Component {
    constructor(props) {
        super(props);
        this.startTicker = this.startTicker.bind(this);
        this.magic = this.magic.bind(this);
        this.setNewStateAndNewAnimation = this.setNewStateAndNewAnimation.bind(this)
        this.setNewStateAndNullAnimation = this.setNewStateAndNullAnimation.bind(this)
        this.setNullAnimation = this.setNullAnimation.bind(this)
        this.state = {massive: testMassive(), step: true}
    }

    //1)  в порядке отработки
    startTicker() {
        this.ticker = setInterval(this.magic, 650)
    }

    // magic() {
    //     const {massive} = this.state
    //     if (massive.length) {
    //         const next = massive.shift();
    //         let animationRow = shiftRowGetAnimationOnePhase(next)
    //         console.log(next)
    //         console.log(animationRow)
    //         if (next === {one: 32, two: 32, three: 32, four: 32}) {
    //             clearInterval(this.ticker)
    //         }
    //         this.setNullAnimation()
    //         setTimeout(()=>this.setCurrentValueAndSlideAnimation(next), 100)
    //         setTimeout(()=>this.setNewStateAndNewAnimation(next), 420)
    //         setTimeout(()=>this.setNullAnimation(), 550)
    //
    //
    //     }
    // }

    magic() {
        let States=RIGHT(this.props.main)
        let oneState=States.oneState
        let twoState=States.twoState
        this.setNullAnimation()
        setTimeout(()=>this.setCurrentValueAndSlideAnimation(oneState), 100)
        setTimeout(()=>this.setNewStateAndNewAnimation(twoState), 420)
        setTimeout(()=>this.setNullAnimation(), 550)
    }

    setNullAnimation() {
        this.props.resetAnimation()
    }

    setCurrentValueAndSlideAnimation(next) {
        this.props.setCurrentState(
            {...this.props.main, ...next}
        )
    }

    setNewStateAndNewAnimation(next) {
        this.props.setCurrentState(
            {...this.props.main, ...next}
        )
    }

    setNewStateAndNullAnimation(next) {
        console.log('setNewStateAndNewAnimation')
        let newStateRow = rowSlide(next);
        let newAnimationRow = shiftRowGetAnimationTwoPhase(next)
        this.props.setCurrentState(
            {
                ...this.props.main, oneRaw: {
                    one: {
                        value: newStateRow.one,
                        anime: 0,
                        timeout: this.props.main.oneRaw.one.timeout
                    },
                    two: {
                        value: newStateRow.two,
                        anime: 0,
                        timeout: this.props.main.oneRaw.two.timeout
                    },
                    three: {
                        value: newStateRow.three,
                        anime: 0,
                        timeout: this.props.main.oneRaw.three.timeout
                    },
                    four: {
                        value: newStateRow.four,
                        anime: 0,
                        timeout: this.props.main.oneRaw.four.timeout
                    },
                }
            }
        )

    }

    render() {
        let problemSituation = () => {
            this.props.setCurrentState(
                {
                    oneRaw: {
                        one: {value: 0, anime: 0, timeout: false},
                        two: {value: 2, anime: 2, timeout: false},
                        three: {value: 0, anime: 0, timeout: false},
                        four: {value: 0, anime: 0, timeout: false}
                    },
                    twoRaw: {
                        one: {value: 2, anime: null, timeout: false},
                        two: {value: 2, anime: null, timeout: false},
                        three: {value: 2, anime: null, timeout: false},
                        four: {value: 2, anime: null, timeout: false}
                    },
                    threeRaw: {
                        one: {value: 2, anime: null, timeout: false},
                        two: {value: 2, anime: null, timeout: false},
                        three: {value: 2, anime: null, timeout: false},
                        four: {value: 2, anime: null, timeout: false}
                    },
                    fourRaw: {
                        one: {value: 4, anime: null, timeout: false},
                        two: {value: 4, anime: null, timeout: false},
                        three: {value: 4, anime: null, timeout: false},
                        four: {value: 4, anime: null, timeout: false}
                    },
                }
            )
        }
        let noProblemSituation = () => {
            this.props.setCurrentState(
                {
                    oneRaw: {
                        one: {value: 0, anime: 0, timeout: false},
                        two: {value: 0, anime: 0, timeout: false},
                        three: {value: 2, anime: 1, timeout: false},
                        four: {value: 0, anime: 0, timeout: false}
                    },
                    twoRaw: {
                        one: {value: 2, anime: null, timeout: false},
                        two: {value: 2, anime: null, timeout: false},
                        three: {value: 2, anime: null, timeout: false},
                        four: {value: 2, anime: null, timeout: false}
                    },
                    threeRaw: {
                        one: {value: 2, anime: null, timeout: false},
                        two: {value: 2, anime: null, timeout: false},
                        three: {value: 2, anime: null, timeout: false},
                        four: {value: 2, anime: null, timeout: false}
                    },
                    fourRaw: {
                        one: {value: 4, anime: null, timeout: false},
                        two: {value: 4, anime: null, timeout: false},
                        three: {value: 4, anime: null, timeout: false},
                        four: {value: 4, anime: null, timeout: false}
                    },
                }
            )
        }
        let rightKey = () => {
            this.magic()
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

        return (<div>
                <div className={s.b}>
                    <div className={s.head}>Header
                        <button onClick={this.startTicker}>testAnimationOneRowVisible</button>
                        <button onClick={problemSituation}>problemTest</button>
                        <button onClick={noProblemSituation}>noProblemTest</button>
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