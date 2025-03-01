import { MdSpeed } from "react-icons/md";
import styles from "./speed.module.css";
import { ToPersianNumber } from "topersiannumber";

const Speed = ({ speed }: any) => {
  return (
    <>
      <div className={styles.speedContainer}>
        <MdSpeed className={styles.speedLogo} />
        <p>
          سرعت:{" "}
          {speed !== "Infinity" && speed !== "NaN" && ToPersianNumber(speed)}{" "}
          کلمه در دقیقه
        </p>
      </div>
    </>
  );
};

export default Speed;
