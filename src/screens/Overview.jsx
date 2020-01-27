import React, { Component } from 'react'
import {
  Card,
  Header,
  Main,
  Footer
} from 'components/Card'
import {
  ChevronLeft,
  ChevronRight,
  KeyboardArrowUp,
  KeyboardArrowDown
} from '@material-ui/icons'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export default class Overview extends Component {
  state = {
    data: [{
      name: 'SAT',
      lose: 0,
      gain: 0,
      quantity: 0
    }, {
      name: 'MON',
      lose: 0,
      gain: 0,
      quantity: 0
    }, {
      name: 'TUE',
      lose: 0,
      gain: 0,
      quantity: 0
    }, {
      name: 'WED',
      lose: 0,
      gain: 0,
      quantity: 0
    }, {
      name: 'THU',
      lose: 0,
      gain: 0,
      quantity: 0
    }, {
      name: 'FRI',
      lose: 0,
      gain: 0,
      quantity: 0
    }, {
      name: 'SUN',
      lose: 0,
      gain: 0,
      quantity: 0
    }]
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({
      user: {},
      data: [{
        name: 'SAT',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }, {
        name: 'MON',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }, {
        name: 'TUE',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }, {
        name: 'WED',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }, {
        name: 'THU',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }, {
        name: 'FRI',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }, {
        name: 'SUN',
        lose: this.gain(),
        gain: this.lose(),
        quantity: this.amount()
      }]
    }), 1000)
  }

  gain = () => Number(
    Math.ceil(Math.random() * 10000) + '000'
  )

  lose = () => Number(
    Math.ceil(Math.random() * 10000) + '000'
  )

  amount = () => Math.ceil(Math.random() * 10)

  render() {
    const { data } = this.state

    return (
      <div className={'overview'}>
        <header className={'highlight'}>
          <Card style={{'border-top': '5px solid #ff8d36'}}>
            <Main>
              Test
            </Main>
          </Card>
          <Card style={{'border-top': '5px solid #ff213f'}}></Card>
          <Card style={{'border-top': '5px solid #2c78ff'}}></Card>
        </header>
        <main>
          <Card>
            <Header name={'Aggregated account balance'}>
              <button className={'button yetAnotherButtonStyle'}>
                <i><ChevronLeft/></i>
              </button>
              <button className={'button yetAnotherButtonStyle'}>
                <i><ChevronRight/></i>
              </button>
              <button className={'button yetAnotherButtonStyle'}>
                20/09/2018 - 27/09/2018
              </button>
              <button className={'button yetAnotherButtonStyle'}>
                Weekly
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
                  <i style={{height: 12, marginTop: -12}}><KeyboardArrowUp/></i>
                  <i style={{height: 12}}><KeyboardArrowDown/></i>
                </div>
              </button>
            </Header>
            <Main>
              <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart data={data} margin={{ left: -10 }}>
                  <XAxis
                    dataKey={'name'}
                    tick={{fill: '#8f9db4', stroke: '#8f9db4', fontSize: 18, strokeWidth: .2}}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{fill: '#8f9db4', stroke: '#8f9db4', fontSize: 18, strokeWidth: .2}}
                    tickFormatter={value => String(value).replace(/\d{6}$/, 'M')}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    payload={[{ quantity: 'test', gain: 'test', lose: 'test' }]}
                  />
                  <Bar dataKey="gain" fill="#24bd86"/>
                  <Bar dataKey="lose" fill="#ff2850"/>
                </BarChart>
              </ResponsiveContainer>
            </Main>
          </Card>
          <Card>
            <Header name={'This is a title'}/>
            <Main/>
            <Footer/>
          </Card>
        </main>
      </div>
    )
  }
}