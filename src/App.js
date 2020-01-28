import React, { Component } from "react";
import "./Style.scss";
import { Header } from "components/Header";
import { Drawer } from "components/Drawer";
import { Overview } from "screens/Overview";
import { BankAccounts } from "screens/BankAccounts";
import { TradeFX } from "screens/TradeFX";
import { Transactions } from "screens/Transactions";
import { Settings } from "screens/Settings";
import {
  Dashboard,
  AccountBalanceWallet,
  Help,
  CompareArrows
} from "@material-ui/icons";

const LINKS = [
  {
    icon: <Dashboard />,
    name: "Overview"
  },
  {
    icon: <AccountBalanceWallet />,
    name: "Bank accounts"
  },
  {
    icon: <Help />,
    name: "TradeFX"
  },
  {
    icon: <CompareArrows />,
    name: "Transactions"
  }
];

const CURRENCIES = ["USD", "EUR", "NGN", "JPY", "CNY", "KRW", "GBP"];

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

export class App extends Component {
  state = {
    activeLink: "Overview",
    user: {
      balance: 0,
      lastTrade: null,
      history: []
    },
    data: []
  };

  componentDidMount = () => {
    setTimeout(
      () =>
        this.setState({
          data: [
            {
              name: "SAT",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            },
            {
              name: "MON",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            },
            {
              name: "TUE",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            },
            {
              name: "WED",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            },
            {
              name: "THU",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            },
            {
              name: "FRI",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            },
            {
              name: "SUN",
              lose: this.gain(),
              gain: this.lose(),
              quantity: this.amount()
            }
          ]
        }),
      1000
    );
  };

  gain = () => Number(~~(Math.random() * 10000) + "000");

  lose = () => Number(~~(Math.random() * 10000) + "000");

  amount = () => Math.ceil(Math.random() * 10);

  // handleChange = ({ key, value }) => {
  //   this.setState({ [key]: value })
  // }

  addTransaction = transaction => {
    this.setState(
      prevState => ({
        user: {
          ...prevState.user,
          lastTrade: transaction,
          history: [transaction, ...prevState.user.history]
        }
      }),
      () =>
        this.setState(prevState => ({
          user: {
            ...prevState.user,
            balance: prevState.user.balance + transaction.value
          }
        }))
    );
  };

  render() {
    const { activeLink, data, user } = this.state;
    return (
      <div className="App">
        <Drawer
          links={LINKS}
          onChange={activeLink => this.setState({ activeLink })}
        />
        <Header
          user={"GW"}
          onClick={() =>
            this.addTransaction({
              value: Number(~~(Math.random() * 100000)),
              currency: CURRENCIES.sample()
            })
          }
        />
        <main className={"App-main"}>
          {
            {
              // eslint-disable-next-line
              "Overview": <Overview data={data} user={user}/>,
              "Bank accounts": <BankAccounts />,
              // eslint-disable-next-line
              "TradeFX": <TradeFX />,
              // eslint-disable-next-line
              "Transactions": <Transactions />,
              // eslint-disable-next-line
              "Settings": <Settings />
            }[activeLink]
          }
        </main>
      </div>
    );
  }
}
