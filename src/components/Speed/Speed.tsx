import { MdSpeed } from "react-icons/md";
import styles from "./speed.module.css";

const Speed = ({speed}: any) => {
  return (
    <>
      <div className={styles.speedContainer}>
        <MdSpeed className={styles.speedLogo} />
        <p>
          سرعت: {speed !== "Infinity" && speed !== "NaN" && speed} {speed > 0 && 'کلمه در دقیقه'}
        </p>
      </div>
    </>
  );
};

export default Speed;
