import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [newPracticeText, setNewParcticeText] = useState("");
  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        +
      </button>

      {/* Always in the DOM, but visibility controlled by CSS */}
      <div className={`modal ${modal ? "show" : ""}`}>
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>ساخت تمرین</h2>
          <textarea onChange={(e)=> setNewParcticeText(e.target.value)} value={newPracticeText}></textarea>
          <div className="char-limit">0/1000</div>
          <button className="add-practice" role="button">
            شروع تمرین
          </button>
          <button className="pure-button" onClick={toggleModal}>
            بستن
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
