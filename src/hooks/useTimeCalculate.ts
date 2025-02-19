import { useEffect, useState } from "react";

const useTimeCalculate = (timeRunning: boolean) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval: number | undefined;

		if (timeRunning) {
			interval = setInterval(() => {
				setTime((second) => second + 1);
			}, 1000);
		} else {
			setTime(0);
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timeRunning]);

	return { time };
};

export default useTimeCalculate;
