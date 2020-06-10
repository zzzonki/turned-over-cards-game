import React, {PureComponent} from 'react'
import Card from '../Card'
import './style.css'

class CardList extends PureComponent {

    constructor(props){
        super(props)
        this.state ={
            count: 0,
            firstOpen: 88,
            secondOpen: 99
        }
    }

    render(){
    const count = this.state.count

    const {digitArray} = this.props

    const digitArray1 = digitArray.slice(0,8)
    const digitArray2 = digitArray.slice(8,16)
    const digitArray3 = digitArray.slice(16,24)
    const digitArray4 = digitArray.slice(24)
    
    const cardDigits1 = digitArray1.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} count={count} counter = {this.incrementCounter} getFirst = {this.getFirst} getSecond = {this.getSecond} firstOpen = {this.state.firstOpen} secondOpen = {this.state.secondOpen} />)
    const cardDigits2 = digitArray2.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} count={count} counter = {this.incrementCounter} getFirst = {this.getFirst} getSecond = {this.getSecond} firstOpen = {this.state.firstOpen} secondOpen = {this.state.secondOpen} />)
    const cardDigits3 = digitArray3.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} count={count} counter = {this.incrementCounter} getFirst = {this.getFirst} getSecond = {this.getSecond} firstOpen = {this.state.firstOpen} secondOpen = {this.state.secondOpen} />)
    const cardDigits4 = digitArray4.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index} count={count} counter = {this.incrementCounter} getFirst = {this.getFirst} getSecond = {this.getSecond} firstOpen = {this.state.firstOpen} secondOpen = {this.state.secondOpen} />)
    
    return(
        <div className='card_list' onClick={() => this.bgCount()}>
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

    incrementCounter = () => {
        if(this.state.count < 3)
            {this.setState({
                count: this.state.count + 1
        })} else{
            this.setState({
                count: 0
            })
        }
        console.log("count was", this.state.count)
    }

    bgCount = () => {
        if(this.state.count >= 2){
            this.setState({
                count: 3
            })
        } else{
            return
        }
    }

    getFirst = (value) =>{
        this.setState({firstOpen: value})
    }
    getSecond = (value) =>{
        this.setState({secondOpen: value})
    }

    componentDidUpdate(){
        if(this.state.firstOpen === this.state.secondOpen){
            console.log('yes', this.state.firstOpen, this.state.secondOpen)
        } else{
            console.log('no', this.state.firstOpen, this.state.secondOpen)
        }
    }
}

export default CardList