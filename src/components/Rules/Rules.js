import React, {Component} from 'react'
import './style.css'

export default class Rules extends Component{
    render(){
        const {rulesOn, toggleRules} = this.props
        const buttonName = rulesOn ? 'Hide rules' : 'How to play'
        return(
            <button className='button' onClick={() => toggleRules()}>{buttonName}</button>
        )
    }
}