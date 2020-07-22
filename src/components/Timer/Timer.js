import React, {Component} from 'react'
import'./style.css'

export default class Timer extends Component{
    state = {
        gameStart: false
    }
    render(){
        const mins = 0
        const secs = 0
        return(
            <div>
                <h3>Timer</h3>
                <div className='timer-field'>{mins} : {secs}</div>
            </div>
        )
    }
}