import "purecss/build/grids-responsive-min.css";
import "purecss/build/pure-min.css";
import { useState } from "react";
import LessonContainer from "./components/LessonsContainer/LessonsContainer";
import Modal from "./components/Modal/Modal";
import Typing from "./components/Typing/Typing";
import useLessonData, { Lesson } from "./lessonData";
import SideLessons from "./components/LessonsContainer/SideLessons";

function App() {
  const [lessonsLeft, setLessonsLeft] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>();
  const [isShowScore, setIsShowScore] = useState(false);
  const [score, setScore] = useState<Lesson>(Object);

  const { lessonsData, setLessonsData } = useLessonData();

  const onLessonSelect = (lesson: Lesson) => {
    setLessonsLeft(true);
    setCurrentLesson(lesson);
    setIsShowScore(false);
  };

  const setBack = () => {
    setLessonsLeft(false);
    setIsShowScore(false);
  };

  return (
    <div className="app-container">
      {!lessonsLeft && (
        <>
          <LessonContainer
            onLessonSelect={onLessonSelect}
            lessonsData={lessonsData}
          />
          <Modal setLessonsData={setLessonsData} />
        </>
      )}
      {isShowScore && (
        <>
          <SideLessons
            onLessonSelect={onLessonSelect}
            lessonsData={lessonsData}
          />
          <div className="scoreContainer">
            {Object.keys(score).map(function (key) {
              return (
                <div>
                  {key}: {score[key]}
                </div>
              );
            })}
          </div>
          <button onClick={setBack}>بازگشت به صفحه اصلی</button>
        </>
      )}
      {lessonsLeft && !isShowScore && (
        <>
          <SideLessons
            onLessonSelect={onLessonSelect}
            lessonsData={lessonsData}
          />
          <Typing
            title={currentLesson?.title}
            text={currentLesson?.description}
            key={currentLesson?.id}
            id={currentLesson?.id}
            setIsShowScore={setIsShowScore}
            setScore={setScore}
            score={score}
            setLessonsData={setLessonsData}
          />
          <button onClick={setBack}>بازگشت به صفحه اصلی</button>
        </>
      )}
    </div>
  );
}

export default App;
