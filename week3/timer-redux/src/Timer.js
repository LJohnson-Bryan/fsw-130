import React from 'react';
import prettyMilliseconds from 'pretty-ms';
import './App.css';

class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        time: 0,
        isOn: false,
        start: 0,
        laps: []
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.addLap = this.addLap.bind(this)
}

startTimer() {
    this.setState({
    isOn: true,
    time: this.state.time,
    start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
    time: Date.now() - this.state.start
    }), 1);
}
stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
}

resetTimer() {
    this.setState({time: 0, isOn: false, laps: []})
}

addLap(time) {
    const newLaps = this.state.laps;
    newLaps.push(time);
    this.setState({laps: newLaps})
    console.log(this.state.laps);
}

render() {

    const laps = this.state.laps.map(item => {
        return <p className="flex-center lapTime">{prettyMilliseconds(item, {verbose: true})}</p>
    });

    return(
    <div>
        <h3>{prettyMilliseconds(this.state.time, {verbose: true})}</h3>
        <div className="flex-center">
        {this.state.isOn === false && this.state.time === 0 && <button onClick={this.startTimer}>start</button>}
        {this.state.isOn && <button onClick={this.stopTimer}>stop</button>}
        {this.state.time !== 0 && this.state.isOn === false && <button onClick={this.startTimer}>resume</button>}
        {this.state.time !== 0 && this.state.isOn === false && <button onClick={this.resetTimer}>reset</button>}
        <button onClick={() => {
        this.addLap(this.state.time)
    }}>Lap</button>
        </div>

    <div class="mt-2">
        <div class="seperator"></div>
        {laps}
    </div>
    </div>
    )
}
}

export default Timer;
