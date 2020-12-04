import React from "react";
import Application from "./components/Application";


class App extends React.Component {
    constructor(props) {
        super(props);
        // Эта привязка обязательна для работы `this` в колбэке.
        this.keyFunction = this.keyFunction.bind(this);
    }
        keyFunction(event){
            if(event.keyCode===40) {console.log("down");
                this.props.down()}
            else if(event.keyCode===38) {console.log("up");
                this.props.up()}
            else if(event.keyCode===37) {console.log("left");
                this.props.left()}
            else if(event.keyCode===39) {console.log("right");
                this.props.right()}
    }
    componentDidMount() {
        document.title="2048";
        document.addEventListener("keydown", this.keyFunction, false);
        // console.log(this.props)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyFunction, false);
    }
    render() {
        return (<Application />);
    }
}


export default App;
