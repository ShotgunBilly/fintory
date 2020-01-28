import React from "react";
import { Card, Header, Main, Footer } from "components/Card";
import {
  ChevronLeft,
  ChevronRight,
  KeyboardArrowUp,
  KeyboardArrowDown
} from "@material-ui/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Overview = ({ data, user: { balance, lastTrade, history } }) => {
  return (
    <div className={"overview"}>
      <header className={"highlight"}>
        <Card style={{ "border-top": "5px solid #ff8d36" }}>
          <Main>
            <h5>Aggregated account balance</h5>
            <p>
              {balance &&
                Number(balance).toLocaleString("ig-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0
                })}
            </p>
          </Main>
        </Card>
        <Card style={{ "border-top": "5px solid #ff213f" }}>
          <Main>
            <h5>Last 5 Trades</h5>
            <ul>
              {history &&
                history.slice(0, 5).map(({ value, currency }) => (
                  <li>
                    {value.toLocaleString("ig-NG", {
                      style: "currency",
                      currency
                    })}
                  </li>
                ))}
            </ul>
          </Main>
        </Card>
        <Card style={{ "border-top": "5px solid #2c78ff" }}>
          <Main>
            <h5>Last Trade</h5>
            <p>
              {lastTrade &&
                lastTrade.value.toLocaleString("ig-NG", {
                  style: "currency",
                  currency: lastTrade.currency
                })}
            </p>
            {lastTrade &&
              (lastTrade.value * 362894).toLocaleString("ig-NG", {
                style: "currency",
                currency: "NGN",
                currencyDisplay: "code"
              })}
          </Main>
        </Card>
      </header>
      <main>
        <Card>
          <Header name={"Aggregated transactions"}>
            <button className={"button yetAnotherButtonStyle"}>
              <i>
                <ChevronLeft />
              </i>
            </button>
            <button className={"button yetAnotherButtonStyle"}>
              <i>
                <ChevronRight />
              </i>
            </button>
            <button className={"button yetAnotherButtonStyle"}>
              20/09/2018 - 27/09/2018
            </button>
            <button className={"button yetAnotherButtonStyle"}>
              Weekly
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10
                }}
              >
                <i style={{ height: 12, marginTop: -12 }}>
                  <KeyboardArrowUp />
                </i>
                <i style={{ height: 12 }}>
                  <KeyboardArrowDown />
                </i>
              </div>
            </button>
          </Header>
          <Main>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={data} margin={{ left: -10 }}>
                <XAxis
                  dataKey={"name"}
                  tick={{
                    fill: "#8f9db4",
                    stroke: "#8f9db4",
                    fontSize: 18,
                    strokeWidth: 0.2
                  }}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fill: "#8f9db4",
                    stroke: "#8f9db4",
                    fontSize: 18,
                    strokeWidth: 0.2
                  }}
                  tickFormatter={value => String(value).replace(/\d{6}$/, "M")}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  payload={[{ quantity: "test", gain: "test", lose: "test" }]}
                />
                <Bar dataKey="gain" fill="#24bd86" />
                <Bar dataKey="lose" fill="#ff2850" />
              </BarChart>
            </ResponsiveContainer>
          </Main>
        </Card>
        <Card>
          <Header name={"This is a title"} />
          <Main />
          <Footer />
        </Card>
      </main>
    </div>
  );
};

export default Overview;
