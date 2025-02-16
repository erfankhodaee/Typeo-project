import styles from "./speed.module.css";
import { MdSpeed } from "react-icons/md";

const Speed = () => {
  return (
    <>
      <div className={styles.speedContainer}>
        <MdSpeed className={styles.speedLogo} />
        <p>سرعت: 25 کلمه در دقیقه</p>
      </div>
    </>
  );
};

export default Speed;
