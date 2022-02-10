import {useState} from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const tipAmount = parseFloat(bill * (tip / 100));
  const total = parseFloat((bill + tipAmount) / people);

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <div className="content">
        <div className="left">
          <h4>Bill</h4>
          <input
            type="number"
            className="input"
            placeholder="0"
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
          <br />
          <h4> Select tip %</h4>
          <div className="tipGroup">
            <button className="tipBtn" onClick={() => setTip(5)}>
              5 %
            </button>
            <button className="tipBtn" onClick={() => setTip(10)}>
              10 %
            </button>
            <button className="tipBtn" onClick={() => setTip(15)}>
              15 %
            </button>
            <button className="tipBtn" onClick={() => setTip(25)}>
              25 %
            </button>
            <button className="tipBtn" onClick={() => setTip(50)}>
              50 %
            </button>
            <input
              type="number"
              placeholder="Custom"
              className="customInput"
              onChange={(e) => setTip(parseFloat(e.target.value))}
            />
          </div>
          <br />
          <h4>Number of People</h4>
          <input
            type="number"
            className="input"
            placeholder="1"
            onChange={(e) => setPeople(parseFloat(e.target.value))}
          />
          <br />
        </div>
        <div className="right">
          <div className="amount">
            <h2 className="title">Tip Amount : </h2>
            <h1 className="result"> ₺{tipAmount.toFixed(2)} </h1>
          </div>
          <div className="total">
            <h2 className="title">Total(person) : </h2>
            <h1 className="result"> ₺{total.toFixed(2)} </h1>
          </div>
          <div>
            <button
              className="resetBtn"
              onClick={() => {
                setBill(0);
                setTip(0);
                setPeople(1);
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
