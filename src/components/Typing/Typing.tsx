import { memo, useEffect, useRef, useState } from "react";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import useTimeCalculate from "../../hooks/useTimeCalculate";
import Accuracy from "../Accuracy/Accuracy";
import Speed from "../Speed/Speed";
import Timer from "../Timer/Timer";
import styles from "./typing.module.css";
import useAccuracyCalculate from "../../hooks/useAccuracyCalculate";
import useSpeedCalculate from "../../hooks/useSpeedCalculate";

interface Props {
  text?: string;
  title?: string;
}

const Typing = ({ text = "", title }: Props) => {
  const [sound, setSound] = useState(true);
  const [invisibleInput, setInvisibleInput] = useState("");
  const [timeRunning, setTimeRunning] = useState(false);
  const [keysCount, setKeysCount] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);

  const { time } = useTimeCalculate(timeRunning);
  const { accuracy, mistake } = useAccuracyCalculate(correctChar, keysCount);
  const { speed } = useSpeedCalculate(time, keysCount);

  const singleTick = new Audio("/src/Audio/key-press-263640.mp3");
  const errorTick = new Audio("/src/Audio/soft-balloon-pop-88692.mp3");
  errorTick.volume = 0.5;

  const inputRef = useRef<HTMLInputElement>(null);

  const practiceArea = text.split("").map((char, index) => {
    if (index < invisibleInput.length) {
      if (char === invisibleInput[index]) {
        return (
          <span key={index} className={styles.correctChar}>
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} className={styles.incorrectChar}>
            {char}
          </span>
        );
      }
    } else if (index === invisibleInput.length) {
      return (
        <span key={index} className={styles.currentChar}>
          {char}
        </span>
      );
    }
    return <span key={index}>{char}</span>;
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const soundToggle = () => {
    setSound(!sound);
  };

  const invisibleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setKeysCount((prev) => prev + 1);
    setInvisibleInput(newValue);

    if (newValue.length > 0) {
      setTimeRunning(true);
    }
    if (newValue.length > invisibleInput.length) {
      const index = newValue.length - 1;
      if (newValue.slice(-1) === text[index]) {
        setCorrectChar((prev) => prev + 1);
        sound ? singleTick.play() : null;
      } else {
        sound ? errorTick.play() : null;
        setInvisibleInput(newValue.slice(0, -1));
      }
    }
    if (newValue.length === text.length) {
      alert(
        `you compeleted in ${time} seconds, with accuracy of ${accuracy}% and you had ${mistake} mistakes, your wpm is ${speed}`
      );
    }
  };

  const handleRestart = () => {
    setInvisibleInput("");
    setTimeRunning(false);
    setKeysCount(0);
    setCorrectChar(0);
  };

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
          <VscDebugRestart
            className={styles.restartLogo}
            onClick={handleRestart}
          />
        </div>
      </div>
      <div className={styles.stats}>
        <Timer time={time} />
        <Speed speed={speed} />
        <Accuracy accuracy={accuracy} mistake={mistake} />
      </div>
      <h2>{title}</h2>
      <div className={styles.textArea}>{practiceArea}</div>
      <input
        ref={inputRef}
        type="text"
        value={invisibleInput}
        onChange={invisibleInputHandler}
        className={styles.invisibleInput}
      />
    </div>
  );
};

export default memo(Typing);
