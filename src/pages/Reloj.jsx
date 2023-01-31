import React, { useEffect, useState } from "react";
import './Reloj.scss'

const Reloj = () => {
  const [reloj, setReloj] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setReloj(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Hora Española:</h2>
      <h3>{reloj}</h3>
    </div>
  );
};
export default Reloj;