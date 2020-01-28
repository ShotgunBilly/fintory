import React from "react";
import logo from "img/omniview_logo.png";
import { Menu, Settings } from "@material-ui/icons";

export const Drawer = ({ links, onChange }) => {
  return (
    <aside className={"App-drawer"}>
      <header>
        <i className={"icon-button"}>
          <Menu />
        </i>
        <img src={logo} alt="logo of omniview" />
      </header>
      <main>
        <nav>
          <ul>
            {links.map(link => (
              <li key={link.name} onClick={() => onChange(link.name)}>
                <i>{link.icon}</i>
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <footer>
        <div className={"settings"} onClick={() => onChange("Settings")}>
          <i>
            <Settings />
          </i>
          Settings
        </div>
      </footer>
    </aside>
  );
};
