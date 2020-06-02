import React, {PureComponent} from 'react'
import Card from '../Card'
import './style.css'

class CardList extends PureComponent {

    constructor(props){
        super(props)
        // this.closeCards = this.closeCards.bind(this)
        this.state ={
            count: 0
        }
    }

    // closeCards() {
    //         this.setState({
    //             turnedOver: false
    //         })
    // }

    render(){
    const {digitArray} = this.props

    const digitArray1 = digitArray.slice(0,8)
    const digitArray2 = digitArray.slice(8,16)
    const digitArray3 = digitArray.slice(16,24)
    const digitArray4 = digitArray.slice(24)
    
    const cardDigits1 = digitArray1.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} counter = {this.incrementCounter.bind(this, index)}/>)
    const cardDigits2 = digitArray2.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} counter = {this.incrementCounter.bind(this, index)}/>)
    const cardDigits3 = digitArray3.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} counter = {this.incrementCounter.bind(this, index)}/>)
    const cardDigits4 = digitArray4.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} counter = {this.incrementCounter.bind(this, index)}/>)
    
    return(
        <div className='card_list'>
            <div className='card_line'>
                {cardDigits1}
            </div>
            <div className='card_line'>
                {cardDigits2}
            </div>
            <div className='card_line'>
                {cardDigits3}
            </div>
            <div className='card_line'>
                {cardDigits4}
            </div>
        </div>
    )}
    incrementCounter = () =>{
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
}

export default CardList