import {useState} from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  let customInput = document.querySelector(".customInput");

  let tipAmount = parseFloat(bill * (tip / 100));
  let total = parseFloat((bill + tipAmount) / people);

  if (isNaN(bill) || people <= 0 || isNaN(tip) || isNaN(people)) {
    tipAmount = 0;
    total = 0;
  }

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
            value={bill}
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
          <br />
          <h4> Select tip %</h4>
          <div className="tipGroup">
            <button
              className={`tipBtn ${tip === 5 ? "active" : ""}`}
              onClick={() => (tip === 5 ? setTip(0) : setTip(5))}
            >
              5 %
            </button>
            <button
              className={`tipBtn ${tip === 10 ? "active" : ""}`}
              onClick={() => (tip === 10 ? setTip(0) : setTip(10))}
            >
              10 %
            </button>
            <button
              className={`tipBtn ${tip === 15 ? "active" : ""}`}
              onClick={() => (tip === 15 ? setTip(0) : setTip(15))}
            >
              15 %
            </button>
            <button
              className={`tipBtn ${tip === 25 ? "active" : ""}`}
              onClick={() => (tip === 25 ? setTip(0) : setTip(25))}
            >
              25 %
            </button>
            <button
              className={`tipBtn ${tip === 50 ? "active" : ""}`}
              onClick={() => (tip === 50 ? setTip(0) : setTip(50))}
            >
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
            value={people}
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
                setBill("");
                setTip("");
                setPeople("");
                customInput.value = "";
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
