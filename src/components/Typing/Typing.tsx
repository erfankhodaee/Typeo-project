import { useState } from "react";
import "./typing.css";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";

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
    <div className="typing">
      <div className="logo-container">
        <div className="sound" onClick={soundToggle}>
          {sound ? (
            <HiMiniSpeakerWave className="speakerW-logo" />
          ) : (
            <HiMiniSpeakerXMark className="speakerX-logo" />
          )}
        </div>

        <div className="restart">
          <VscDebugRestart className="restart-logo" />
        </div>
      </div>
      <h2>تمرین - 5 - چهار حرف اول</h2>

      <textarea
        name=""
        id=""
        value={typeText}
        onChange={handleTextArea}
      ></textarea>
    </div>
  );
};

export default Typing;
