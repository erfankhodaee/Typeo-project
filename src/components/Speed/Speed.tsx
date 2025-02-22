import { MdSpeed } from "react-icons/md";
import styles from "./speed.module.css";

interface Props {
  time: number;
  keysCount: number;
}

const Speed = ({ time, keysCount }: Props) => {
  const speed = ((keysCount / 5 / time) * 60).toFixed(0);
  return (
    <>
      <div className={styles.speedContainer}>
        <MdSpeed className={styles.speedLogo} />
        <p>
          سرعت: {speed !== "Infinity" && speed !== "NaN" && speed} کلمه در دقیقه
        </p>
      </div>
    </>
  );
};

export default Speed;
