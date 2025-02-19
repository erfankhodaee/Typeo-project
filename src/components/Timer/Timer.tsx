import { RxLapTimer } from "react-icons/rx";
import useTimeCalculate from "../../hooks/useTimeCalculate";
import styles from "./timer.module.css";
import { memo } from "react";

interface Props {
	time: number;
}

const Timer = ({ time }: Props) => {



	return (
		<div className={styles.timerContainer}>
			<RxLapTimer className={styles.timerLogo} />
			زمان: {time} ثانیه
		</div>
	);
};

export default memo(Timer);
