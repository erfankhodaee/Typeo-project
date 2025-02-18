import { useEffect, useState } from "react";
import styles from "./timer.module.css";
import { RxLapTimer } from "react-icons/rx";

interface Props {
  timeRunning: boolean;
}

const Timer = ({ timeRunning }: Props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    if (timeRunning) {
      interval = setInterval(() => {
        setTime((second) => second + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeRunning]);

  return (
    <div className={styles.timerContainer}>
      <RxLapTimer className={styles.timerLogo} />
      زمان: {time} ثانیه
    </div>
  );
};

export default Timer;
