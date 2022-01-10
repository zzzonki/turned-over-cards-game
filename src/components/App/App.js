import React, {Component} from 'react';
import CardList from '../CardList'
import Info from '../Info'
import './style.css'

class App extends Component{
  state={
    gameStart: false,
    digitArray: [],
    currentTime: ''
  }

  componentDidMount(){
    const digitArray = []
      for (let i = 1; i < 17; i++) {
          digitArray.push(i)
      }
      for (let i = 1; i < 17; i++) {
          digitArray.push(i)    
      }
      //digitArray.sort((a, b) => a > b ? Math.random() - 0.5 : -(Math.random() - 0.5))
      console.log('app', digitArray)
      this.setState({
        digitArray: digitArray
      })
  }
  render(){
    console.log('app rendered')

    return (
      <div className="App">
        <Info gamePause={this.gamePause} gameStart={this.state.gameStart} getTime={this.getTime} />
        <CardList digitArray = {this.state.digitArray} gameStarter={this.gameStarter} gameStart={this.state.gameStart} currentTime={this.state.currentTime} />
      </div>
    )
  }

  gameStarter = () =>{
    this.setState({
        gameStart: true
    })
  }
  gamePause = () =>{
      this.setState({
          gameStart: false
      })
  }

  getTime = (m, s) =>{
      this.setState({
          currentTime: m+':'+s
      })
  }

}

export default App;