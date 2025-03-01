import { TbTargetArrow } from "react-icons/tb";
import styles from "./accuracy.module.css";
import { ToPersianNumber } from "topersiannumber";

interface AccuracyProps {
  accuracy: string;
  mistake: number;
}

const Accuracy = ({ accuracy, mistake }: AccuracyProps) => {
  return (
    <div className={styles.accuracyContainer}>
      <TbTargetArrow className={styles.accuracyLogo} />
      <p>
        دقت:{" "}
        {accuracy !== "NaN" && accuracy !== "infinity"
          ? ToPersianNumber(accuracy)
          : ToPersianNumber("0")}{" "}
        %
      </p>
      <p>تعداد خطا: {ToPersianNumber(mistake)}</p>
    </div>
  );
};

export default Accuracy;
