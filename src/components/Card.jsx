import React from "react";

const Card = ({ style, children }) => (
  <div className={"App-card"} style={style}>
    {children}
  </div>
);

const Header = ({ name, style, children }) => [
  <header style={style}>
    {name && <h4>{name}</h4>}
    {children && <div className={"actionBar"}>{children}</div>}
  </header>,
  <hr />
];

const Main = ({ name, style, children }) => (
  <main style={style}>
    {name && <h4>{name}</h4>}
    {children}
  </main>
);

const Footer = ({ style, children }) => [
  <hr />,
  <footer style={style}>{children}</footer>
];

export { Card, Header, Main, Footer };
