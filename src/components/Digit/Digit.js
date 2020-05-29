import React, {Component} from 'react'
import './style.css'

export default class Digit extends Component{
       
    render(){
        const {cardDigit} = this.props
        
        return(
            <div className="digit">{cardDigit}</div>
        )
    }
}