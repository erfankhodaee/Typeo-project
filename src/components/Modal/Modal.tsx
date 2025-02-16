import { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [newPracticeText, setNewPracticeText] = useState<string>("");
  const [char, setChar] = useState<number>(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPracticeText(e.target.value);
    setChar(e.target.value.length);
  };

  return (
    <div className={`modal-wrapper ${modal ? "no-scroll" : ""}`}>
      <button onClick={toggleModal} className="btn-modal">
        ساخت تمرین
      </button>

      {modal && (
        <div className="modal show" aria-hidden={!modal} aria-modal="true">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-title">ساخت تمرین</h2>
            <textarea
              className="modal-textarea"
              onChange={textAreaHandler}
              value={newPracticeText}
            ></textarea>
            <div className={`char-limit ${char > 1000 ? "char-limit-red" : ""}`}>
              {char}/1000
            </div>
            <button className="add-practice" role="button">
              شروع تمرین
            </button>
            <button className="pure-button close-modal" onClick={toggleModal}>
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
