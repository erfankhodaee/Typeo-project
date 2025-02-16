import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import styles from "./accuracy.module.css";

const Accuracy = () => {
  return (
    <div className={styles.accuracyContainer}>
      <TbTargetArrow className={styles.accuracyLogo} />
      <p>دقت: 87 %</p>
      <p>تعداد خطا: 5</p>
    </div>
  );
};

export default Accuracy;
