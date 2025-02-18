import { memo, useEffect, useRef, useState } from "react";
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
  const [invisibleInput, setInvisibleInput] = useState("");

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

  const invisbleInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvisibleInput(e.target.value);
    // if (
    //   invisibleInput === textRef.current.split("")[invisibleInput.length - 1]
    // ) {

    //   setInvisibleInput("");
    // }
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
          <VscDebugRestart className={styles.restartLogo} />
        </div>
      </div>
      <div className={styles.stats}>
        <Timer />
        <Speed />
        <Accuracy />
      </div>
      <h2>{lessonTitle}</h2>
      <div className={styles.textArea}>
        {typeText.split("").map((char, index) => {
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
          }else if (index == invisibleInput.length){
            return (
              <span key={index} className={styles.currentChar}>
                {char}
              </span>
            );
          }
          return <span key={index}>{char}</span>;
        })}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={invisibleInput}
        onChange={invisbleInputHandler}
				className={styles.invisibleInput}
      />
    </div>
  );
};

export default memo(Typing);
