import React from "react";
import { Button } from "antd";
import Calendar from "../components/Calendar";
import { useState } from "react";

const Booking = () => {
  const [valueInput, setValueInput] = useState(1); // thay gtri mac dinh o day
  const handleIncrease = () => {
    if (valueInput >= 99) return;
    else setValueInput(valueInput + 1);
  };
  const handleDecrease = () => {
    if (valueInput <= 1) return;
    else setValueInput(valueInput - 1);
  };

  return (
    <div>
      <div className="container">
        <div className="card1">
          <ul className="infor">
            <li>
                <div>
                  Guest
                </div>
              <div className="wrap-inputs">
                <div className="inputValue">{valueInput}</div>
                <div className="wrap-buttons">
                  <Button onClick={handleIncrease}>+</Button>
                  <Button onClick={handleDecrease}>-</Button>
                </div>
              </div>
            </li>
            <li>
              Check in <Calendar></Calendar>
            </li>
            <li>
              Check out <Calendar></Calendar>
            </li>
            <li>
              {" "}
              <Button>Search</Button>{" "}
            </li>
          </ul>
        </div>
        <div className="card2">gdfgdg</div>
      </div>
    </div>
  );
};

export default Booking;
