import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherApp from "./WeatherApp.js";

import "./styling/headerstyle.css";

function Header() {
  const [currentTime, setCurrentTime] = useState(moment().format("h:mm:ss A"));
  // const currentDate = moment().format("MM/DD/YYYY");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("h:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="weather">
        <WeatherApp />
      </div>
      <div className="logo">CompleteIt Logo</div>
      <div className="timeAndDate">
        <div className="time">{currentTime} </div>
      </div>
    </header>
  );
}

export default Header;
