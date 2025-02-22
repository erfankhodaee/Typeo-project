import { TbTargetArrow } from "react-icons/tb";
import styles from "./accuracy.module.css";

interface AccuracyProps {
  accuracy: number;
  mistake: number;
}

const Accuracy = ({ accuracy, mistake }: AccuracyProps) => {
  return (
    <div className={styles.accuracyContainer}>
      <TbTargetArrow className={styles.accuracyLogo} />
      <p>
        دقت: {accuracy !== "NaN" && accuracy !== "infinity" ? accuracy : "0"} %
      </p>
      <p>تعداد خطا: {mistake}</p>
    </div>
  );
};

export default Accuracy;
