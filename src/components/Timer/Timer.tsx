import { memo } from "react";
import { RxLapTimer } from "react-icons/rx";
import styles from "./timer.module.css";

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
