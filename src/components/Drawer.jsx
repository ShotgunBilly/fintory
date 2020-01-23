import React, { Component } from 'react'
import logo from 'img/omniview_logo.png'
import {
  Menu,
  Settings
} from '@material-ui/icons'

export default class Drawer extends Component {
  render() {
    const { links, onChange } = this.props
    return (
      <aside style={{'background-color': 'dodgerblue'}}>
        <header>
          <div>
            <Menu/>
            <img src={logo} alt='logo of omniview'/>
          </div>
        </header>
        <main>
          <nav>
            <ul>
              {links.map(
                link =>
                <li
                  key={link.name}
                  onClick={() => onChange(link.name)}>
                  <i>{link.icon}</i>
                  {link.name}
                </li>
              )}
            </ul>
          </nav>
        </main>
        <footer>
          <div onClick={() => onChange('Settings')}>
            <Settings/>
            Settings
          </div>
        </footer>
      </aside>
    )
  }
}