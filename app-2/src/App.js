import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      foods:[
        'chicken', 'bbq', 'ice cream', 'fries', 'turkey'
      ]
    }
  }
  render() {
    let displayFoods= this.state.foods.map((element, index)=>{
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div>
        {displayFoods}
      </div>
    )
  }
}
