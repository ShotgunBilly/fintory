import React, { Component } from 'react'
import { Search, HelpOutline, NotificationsNone } from '@material-ui/icons'

export default class Header extends Component {
  render() {
    const { additionalElements, user } = this.props
    return (
      <header  style={{'background-color': 'deeppink'}}>
        <div>
          {additionalElements}
        </div>
        <div>
          <Search/>
          <HelpOutline/>
          <NotificationsNone/>
          <div className={'App-profile'}>
            {user}
          </div>
        </div>
      </header>
    )
  }
}
