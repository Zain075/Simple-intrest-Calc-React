import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Calculate } from "@mui/icons-material";

function App() {
  //define state
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);

  console.log(amount, rate, year);

  //simple intrest calculation
  const Calculate = (e) => {
    const output = (amount * year * rate) / 100;
    console.log(output);
    setInterest(output);
  };

  //reset form
  const Reset = (e) => {
    setAmount(0);
    setYear(0);
    setRate(0);
    setInterest(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="headings">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple intrest with us </p>
        </div>

        <div className="total">
          <h3>&#8377; {interest || "0"}</h3>
          <p>Your Total Interest </p>
        </div>

        <div className="form">
          <form>
            <div className="input">
              <TextField
                onChange={(e) => setAmount(e.target.value)}
                value={amount || ""}
                className="in"
                label="Amount"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setRate(e.target.value)}
                value={rate || ""}
                className="in"
                label="Rate"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setYear(e.target.value)}
                value={year || ""}
                className="in"
                label="Year"
                variant="outlined"
              />
            </div>

            <div className="button">
              <Button onClick={Calculate} variant="contained">
                Calculate
              </Button>
              <Button onClick={Reset} variant="outlined">
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
