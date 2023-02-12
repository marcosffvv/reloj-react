import React, { useState, useEffect } from "react";
import "./Countdown.scss";

const Countdown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("September 21, 2023 09:00:00").getTime();
    let x = setInterval(() => {
      let today = new Date().getTime();

      let distance = countDownDate - today;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "' " + seconds + "''");

      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, []);
  return (
    <div>
      <h2>Cumplo 1 año como desarrollador en:</h2>
      <h3>{time}</h3>
    </div>
  );
};

export default Countdown;

