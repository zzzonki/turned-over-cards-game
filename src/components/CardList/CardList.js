import React from 'react'
import Card from '../Card'
import './style.css'

function CardList(props) {
    const digitArray = []
    for (let i = 1; i < 17; i++) {
        digitArray.push(i)
    }
    for (let i = 1; i < 17; i++) {
        digitArray.push(i)    
    }
    digitArray.sort((a, b) => a > b ? Math.random() - 0.5 : -(Math.random() - 0.5))
    console.log(digitArray)

    const digitArray1 = digitArray.slice(0,8)
    const digitArray2 = digitArray.slice(8,16)
    const digitArray3 = digitArray.slice(16,24)
    const digitArray4 = digitArray.slice(24)

    const cardDigits1 = digitArray1.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)
    const cardDigits2 = digitArray2.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)
    const cardDigits3 = digitArray3.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)
    const cardDigits4 = digitArray4.map((cardDigit, index) =>
    <Card cardDigit = {cardDigit} key = {index}/>)

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
    )
}

export default CardList