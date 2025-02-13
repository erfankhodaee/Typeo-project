import { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [newPracticeText, setNewParcticeText] = useState<string>("");
  const [char, setChar] = useState<number>(0);
  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      // below to do it without doc.body ?
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewParcticeText(e.target.value);
    setChar(e.target.value.length);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        +
      </button>

      <div className={`modal ${modal ? "show" : ""}`}>
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2 className="modal-title">ساخت تمرین</h2>
          {/* below needs to be event handler ?*/}
          <textarea
            onChange={textAreaHandler}
            value={newPracticeText}
          ></textarea>
          {char > 1000 ? (
            <div className="char-limit-red char-limit">{char}/1000</div>
          ) : (
            <div className="char-limit">{char}/1000</div>
          )}
          <button className="add-practice" role="button">
            شروع تمرین
          </button>
          <button className="pure-button close-modal" onClick={toggleModal}>
            بستن
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
