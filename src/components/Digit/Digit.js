import React, {Component} from 'react'
import './style.scss'

export default class Digit extends Component{
       
    render(){
        const {cardDigit} = this.props
        
        return(
            <div className="digit"><img src={require(`./pics/${cardDigit}.png`)} alt={cardDigit} /></div>
        )
    }
}