import React, { Component } from 'react'
import Button from 'components/Button'
import {
  Add,
  Search,
  HelpOutline,
  NotificationsNone
} from '@material-ui/icons'

export default class Header extends Component {
  render() {
    const { user } = this.props
    return (
      <header className={'App-header'}>
        <div className={'header-left'}>
          <Button
            name={'New transaction'}
            icon={<Add/>}
            onClick={name => alert(name)}
          />
        </div>
        <div className={'header-right'}>
          <i className={'icon-button'}><Search/></i>
          <i className={'icon-button'}><HelpOutline/></i>
          <i className={'icon-button'}><NotificationsNone/></i>
          <div className={'header-profile'}>
            {user}
          </div>
        </div>
      </header>
    )
  }
}
