import React, { Component } from 'react'

export default class Overview extends Component {
  render() {
    return (
      <div className={'overview'}>
        <header className={'highlight'}>
          <div style={{'background-color': '#ff8d36'}}></div>
          <div style={{'background-color': '#ff213f'}}></div>
          <div style={{'background-color': '#2c78ff'}}></div>
        </header>
        <main>
          <div style={{'background-color': '#8be9fd'}}></div>
          <div style={{'background-color': '#ff79c6'}}></div>
        </main>
      </div>
    )
  }
}