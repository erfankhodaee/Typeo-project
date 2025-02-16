import { useState } from "react";
import styles from "./typing.module.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import Timer from "../Timer/Timer";
import Speed from "../Speed/Speed";
import Accuracy from "../Accuracy/Accuracy";

const Typing = () => {
  const [typeText, setTypeText] = useState("سلام");
  const [sound, setSound] = useState(false);

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypeText(e.target.value);
  };

  const soundToggle = () => {
    setSound(!sound);
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
        <Accuracy/>
        
      </div>
      <h2>تمرین - 5 - چهار حرف اول</h2>

      <textarea
        name=""
        id=""
        value={typeText}
        onChange={handleTextArea}
        className={styles.textArea}
      ></textarea>
    </div>
  );
};

export default Typing;
