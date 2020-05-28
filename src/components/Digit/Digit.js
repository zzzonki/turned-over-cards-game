import React, {Component} from 'react'
import './style.css'

export default class Digit extends Component{
    
    // componentDidMount(){
    //     const baseArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ,6 ,6 ,7 ,7 ,8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14 ,15, 15, 16, 16]
    //     const newArray = baseArray.sort((a, b) => a > b ? Math.random() - 0.5 : -(Math.random() - 0.5))
    //     console.log(newArray)
    // }
    
    render(){

        const {newArray} = this.props
        
        for (let i = 0; i < this.newArray.length; i++) {
            const dig = this.newArray[i];
            
        return(
            <div className="digit">{dig}</div>
        )}
    }

    compareRandom() {
        this.baseArray.sort(Math.random() - 0.5)
        console.log(this.baseArray)
    }
}