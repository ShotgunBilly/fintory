import React, { Component } from 'react'
import Card from 'components/Card'
// import { Bar } from 'react-chartjs-2'
// import { ResponsiveBar } from '@nivo/bar'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

export default class Overview extends Component {
  state = {
    data: [{
      name: 'SAT',
      lose: 0,
      gain: 0,
      amt: 0
    }, {
      name: 'MON',
      lose: 0,
      gain: 0,
      amt: 0
    }, {
      name: 'TUE',
      lose: 0,
      gain: 0,
      amt: 0
    }, {
      name: 'WED',
      lose: 0,
      gain: 0,
      amt: 0
    }, {
      name: 'THU',
      lose: 0,
      gain: 0,
      amt: 0
    }, {
      name: 'FRI',
      lose: 0,
      gain: 0,
      amt: 0
    }, {
      name: 'SUN',
      lose: 0,
      gain: 0,
      amt: 0
    }]
  }

  gain = () => Number(
    Math.ceil(Math.random() * 10000) + '000'
  )

  lose = () => Number(
    Math.ceil(Math.random() * 10000) + '000'
  )

  amount = () => Math.ceil(Math.random() * 10)

  componentDidMount = () => {
    setTimeout(() => this.setState({
      data: [{
        name: 'SAT',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }, {
        name: 'MON',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }, {
        name: 'TUE',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }, {
        name: 'WED',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }, {
        name: 'THU',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }, {
        name: 'FRI',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }, {
        name: 'SUN',
        lose: this.gain(),
        gain: this.lose(),
        amt: this.amount()
      }]
    }), 1000)
  }

  render() {
    const { data } = this.state

    return (
      <div className={'overview'}>
        <header className={'highlight'}>
          <Card style={{'border-top': '5px solid #ff8d36'}}></Card>
          <Card style={{'border-top': '5px solid #ff213f'}}></Card>
          <Card style={{'border-top': '5px solid #2c78ff'}}></Card>
        </header>
        <main>
          <Card name={'Aggregated account balance'}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="gain" fill="#24bd86"/>
              <Bar dataKey="lose" fill="#ff2850"/>
            </BarChart>
          </Card>
          <Card name={'This is a title'}/>
        </main>
      </div>
    )
  }
}