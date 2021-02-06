import React from 'react'
import s from './LineInGame.module.css';
import GameFieldContainer from "./gameField/GameFieldContainer";
import {LEFT, RIGHT, rowSlide, UP} from "../redux/logic";
import testMassive from "./testMassive";
import {DOWN  as D} from '../redux/keyPressReducer'


//todo   на основе имеющихся данных и logics реализовать полностью рабочие кнопки
class LineInGame extends React.Component {
    constructor(props) {
        super(props);
        this.startTicker = this.startTicker.bind(this);
        this.magic = this.magic.bind(this);
        this.setNewStateAndNewAnimation = this.setNewStateAndNewAnimation.bind(this)
        this.setNewStateAndNullAnimation = this.setNewStateAndNullAnimation.bind(this)
        this.setNullAnimation = this.setNullAnimation.bind(this)
        this.keyFunction = this.keyFunction.bind(this);
        this.state = {massive: testMassive(), step: true}
        this.keyFunction=this.keyFunction.bind(this)
    }

    keyFunction(event) {
        if (event.keyCode === 40) {
            this.props.down()
            console.log(" DOWN PRESS")
        } else if (event.keyCode === 38) {
           this.props.up()
        } else if (event.keyCode === 37) {
            this.props.left()
        } else if (event.keyCode === 39) {
           this.props.right()
        }
    }

    componentDidMount() {
        document.title = "2048";
        document.addEventListener("keydown", this.keyFunction, false);
        if(this.props.keys==='left'){
            this.magic(LEFT(this.props.main))
        }else if(this.props.keys==='right'){
            this.magic(RIGHT(this.props.main))
        }else if(this.props.keys==='up'){
            this.magic(UP(this.props.main))
        }else if(this.props.keys===D){
            console.log('iam here')
            this.magic(this.props.main)
        }
        // console.log(this.props)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyFunction, false);
        this.props.setNull()
    }
    //1)  в порядке отработки
    startTicker() {
        this.ticker = setInterval(this.magic, 650)
    }
    magic(twoStates) {
        let States = twoStates
        let oneState = States.oneState
        let twoState = States.twoState
        this.setNullAnimation()
        setTimeout(() => this.setCurrentValueAndSlideAnimation(oneState), 100)
        setTimeout(() => this.setNewStateAndNewAnimation(twoState), 500)
        setTimeout(() => this.setNullAnimation(), 600)
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
        return (<div>
                <div className={s.b}>
                    <div className={s.head}>Header
                        <button onClick={this.props.reset}>Reset animation</button>
                    </div>
                    <GameFieldContainer/>
                </div>
            </div>
        )
    }
}

export default LineInGame