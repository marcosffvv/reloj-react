import React, {useState, useEffect} from "react";
import "./Crono.scss";

const Crono = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="crono">
      <h2>{time} segundos</h2>
      <div className="crono__botones">
      <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Crono;
