import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import styles from "./accuracy.module.css";

const Accuracy = ({ correctChar, keysCount }: any) => {
	const accuracy = ((correctChar / keysCount) * 100).toFixed(0);
	return (
		<div className={styles.accuracyContainer}>
			<TbTargetArrow className={styles.accuracyLogo} />
			<p>دقت: {accuracy !== "NaN" && accuracy !== "infinity" ? accuracy : '0'} %</p>
			<p>تعداد خطا: {keysCount - correctChar}</p>
		</div>
	);
};

export default Accuracy;
