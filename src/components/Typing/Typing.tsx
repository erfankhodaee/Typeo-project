import { memo, useEffect, useState } from "react";
import styles from "./typing.module.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import Timer from "../Timer/Timer";
import Speed from "../Speed/Speed";
import Accuracy from "../Accuracy/Accuracy";
import { Lesson } from "../../lessonData";

interface Props {
	text?: string;
	title?: string;
}

const Typing = ({ text = "", title }: Props) => {
	const [typeText, setTypeText] = useState(text);
	const [lessonTitle, setLessonTitle] = useState(title);
	const [sound, setSound] = useState(false);
	const [invisibleInput, setInvisibleInput] = useState('');
  

	const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTypeText(e.target.value);
	};

	const soundToggle = () => {
		setSound(!sound);
	};

  const invisbleInputHandler =(e)=>{
    setInvisibleInput(e.target.value)

  }

	return (
		<div className={styles.typing}>
			<div className={styles.logoContainer}>
				<div className={styles.sound} onClick={soundToggle}>
					{sound ? (
						<HiMiniSpeakerWave className={styles.speakerWlogo} />
					) : (
						<HiMiniSpeakerXMark className={styles.speakerXlogo} />
					)}
				</div>

				<div className={styles.restart}>
					<VscDebugRestart className={styles.restartLogo} />
				</div>
			</div>
			<div className={styles.stats}>
				<Timer />
				<Speed />
				<Accuracy />
			</div>
			<h2>{lessonTitle}</h2>
			<textarea
				disabled
				name=""
				id=""
				value={typeText}
				onChange={handleTextArea}
				className={styles.textArea}
			></textarea>
			<input type="text" value={invisibleInput} onChange={invisbleInputHandler} />
		</div>
	);
};

export default memo(Typing);
