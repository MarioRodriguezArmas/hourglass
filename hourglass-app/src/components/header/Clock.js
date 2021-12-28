import React, { useState } from "react";
let days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THUSDAY",
  "FRIDAY",
  "SATURDAY",
];
let months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
let month = new Date().getMonth();
let date = new Date().getDay();
let year = new Date().getFullYear();
let day = new Date().getDate();

function Clock() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setctime(time);
  };
  setInterval(updateTime, 1000);

  return (
  <div className="clock-container col-4 d-none d-md-block">
      <div className="clock ">
      <div className="hours">{ctime}</div>
      <div className="day">{`${days[date]} ${day}`}</div>
      <div className="date">{` ${months[month]} ${year}`}</div>
    </div>
  </div>
  );
}

export default Clock;
