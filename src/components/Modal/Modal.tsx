import { useState } from "react";
import "./modal.css";
import { Lesson } from "../../lessonData";
import { ToPersianNumber } from "topersiannumber";

interface modalProps {
  setLessonsData: React.Dispatch<React.SetStateAction<Lesson[]>>;
}

const Modal = ({ setLessonsData }: modalProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [newPracticeText, setNewPracticeText] = useState<string>("");
  const [char, setChar] = useState<number>(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const textAreaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPracticeText(e.target.value);
    setChar(e.target.value.length);
  };

  const handleSubmit = (data: FormData) => {
    const newData = data.get("modal") as string;
    setLessonsData((prev: Lesson[]) => {
      return [
        ...prev,
        {
          type: "practice",
          description: newData,
          id: prev.length + 1,
          title: "TypeScript",
          unlocked: true,
        },
      ];
    });
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
            <form action={handleSubmit}>
              <input
                name="modal"
                type="text"
                className="modal-textarea"
                onChange={textAreaHandler}
                value={newPracticeText}
              />
              <button className="add-practice" role="button">
                شروع تمرین
              </button>
            </form>
            <div
              className={`char-limit ${char > 1000 ? "char-limit-red" : ""}`}
            >
              {ToPersianNumber(char)}/{ToPersianNumber(1000)}
            </div>

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
