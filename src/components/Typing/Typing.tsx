import { memo, useEffect, useRef, useState } from "react";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import useAccuracyCalculate from "../../hooks/useAccuracyCalculate";
import useSpeedCalculate from "../../hooks/useSpeedCalculate";
import useTimeCalculate from "../../hooks/useTimeCalculate";
import useLessonData, { Lesson } from "../../lessonData";
import Accuracy from "../Accuracy/Accuracy";
import Speed from "../Speed/Speed";
import Timer from "../Timer/Timer";
import styles from "./typing.module.css";

interface Props {
  text?: string;
  title?: string;
  id?: number;
  setIsShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<Lesson>>;
  score: Lesson;
}

const Typing = ({
  text = "",
  title,
  id,
  setIsShowScore,
  score,
  setScore,
}: Props) => {
  const [sound, setSound] = useState(true);
  const [invisibleInput, setInvisibleInput] = useState("");
  const [timeRunning, setTimeRunning] = useState(false);
  const [keysCount, setKeysCount] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [userMistake, setUserMistake] = useState(0);

  // calling hooks to calculate stats of this single practice
  const { time } = useTimeCalculate(timeRunning);
  const { accuracy, mistake } = useAccuracyCalculate(correctChar, keysCount);
  const { speed } = useSpeedCalculate(time, keysCount);

  // addign sounds
  const singleTick = new Audio("/src/Audio/key-press-263640.mp3");
  const errorTick = new Audio("/src/Audio/soft-balloon-pop-88692.mp3");
  errorTick.volume = 0.5;

  // rendering textArea with colors according to invisble input
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

  // forcing keyboard key to be registered only on invisble input
  const inputRef = useRef<HTMLInputElement>(null);
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

  // getting data from dummy data

  const { lessonsData, setLessonsData } = useLessonData();

  // handling logic for invisbleinput
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
        // setInvisibleInput(newValue.slice(0, -1));
        setUserMistake((prev) => prev + 1);
        if (userMistake === 3) {
          setUserMistake(0);
          alert("داری اشتباه میزنی");
        }
      }
    }
    if (newValue.length === text.length) {
      setLessonsData(
        (prev) =>
          prev.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                speed: +speed,
                accuracy: accuracy,
                time: time,
                mistakes: mistake,
              };
            } else {
              return item;
            }
          })
        // prev.map(lesson => {
        //   if (lesson.id === id) {
        //     lesson.speed = +speed
        //     lesson.accuracy = accuracy
        //     lesson.time = time
        //   }
        // })
      );
      setIsShowScore(true);
      setScore({
        ...score,
        speed: +speed,
        accuracy: accuracy,
        mistakes: mistake,
        time: time,
      });
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
