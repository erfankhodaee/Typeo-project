import LessonContainer from "./components/LessonsContainer/LessonsContainer";
import Modal from "./components/Modal/Modal";
import Typing from "./components/Typing/Typing";
import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";
import { useState } from "react";
import SideLessons from "./components/LessonsContainer/SideLessons";

function App() {
  const [lessonLeft, setLessonLeft] = useState(false);

  return (
    <div className="app-container">
      {lessonLeft && (
        <>
          <SideLessons />
          <Typing />
        </>
      )}
      {!lessonLeft && (
        <>
          <LessonContainer onLessonSelect={() => setLessonLeft(true)} />
        </>
      )}
      <Modal />
    </div>
  );
}

export default App;
