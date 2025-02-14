import { useEffect, useState } from "react";
import "./navBar.css";
import { RxLapTimer } from "react-icons/rx";

const NavBar = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval:number =0;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((second) => second + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Cleanup
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", direction: "rtl" }}>
      <h1>
        <RxLapTimer /> زمان: {time} ثانیه
      </h1>
      <button
        className="pure-button-primary pure-button"
        onClick={startTimer}
        disabled={isRunning}
      >
        شروع
      </button>
      <button
        className="pure-button-primary pure-button"
        onClick={stopTimer}
        disabled={!isRunning}
      >
        توقف
      </button>
      <button className="pure-button-primary pure-button" onClick={resetTimer}>
        شروع مجدد
      </button>
    </div>
  );
};

export default NavBar;
