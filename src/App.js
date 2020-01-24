import React, { Component } from 'react'
import './App.css'
import Header from 'components/Header'
import Drawer from 'components/Drawer'
import Overview from 'screens/Overview'
import BankAccounts from 'screens/BankAccounts'
import TradeFX from 'screens/TradeFX'
import Transactions from 'screens/Transactions'
import Settings from 'screens/Settings'
import {
  Dashboard,
  AccountBalanceWallet,
  Help,
  CompareArrows
} from '@material-ui/icons'

const LINKS = [{
    icon: <Dashboard/>,
    name: 'Overview'
  }, {
    icon: <AccountBalanceWallet/>,
    name: 'Bank accounts'
  }, {
    icon: <Help/>,
    name: 'TradeFX'
  }, {
    icon: <CompareArrows/>,
    name: 'Transactions'
  }
]

class App extends Component {
  state = {
    activeLink: 'Overview'
  }

  // handleChange = ({ key, value }) => {
  //   this.setState({ [key]: value })
  // }

  render () {
    const { activeLink } = this.state
    return (
      <div className='App'>
        <Drawer links={LINKS} onChange={activeLink => this.setState({activeLink})}/>
        <Header user={'GW'}/>
        <main className={'App-main'}>
          {{
            'Overview': <Overview/>,
            'Bank accounts': <BankAccounts/>,
            'TradeFX': <TradeFX/>,
            'Transactions': <Transactions/>,
            'Settings': <Settings/>
          }[activeLink]}
        </main>
      </div>
    )
  }
}

export default App
