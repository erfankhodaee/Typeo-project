import "purecss/build/pure.css";
import { useEffect, useState } from "react";
import { LuBookOpenText } from "react-icons/lu";
import { Lesson } from "../../lessonData";
import { ToPersianNumber } from "topersiannumber";
import styles from "./lessonsContainer.module.css";
export interface Props {
  onLessonSelect: (lesson: Lesson) => void;
  lessonsData: Lesson[];
}

const LessonContainer = ({ onLessonSelect, lessonsData }: Props) => {
  const [avgSpeed, setAvgSpeed] = useState(0);
  useEffect(() => {
    let count = 0;
    const totalSpeed = lessonsData.reduce((sum, lesson) => {
      if (lesson.speed > 0) {
        count++;
        return sum + lesson.speed;
      }
      return sum;
    }, 0);

    setAvgSpeed(+(totalSpeed / count).toFixed(0));
  }, [lessonsData]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.average}>
          <div className={styles.averageSpeed}>
            {" "}
            {ToPersianNumber(avgSpeed)}:میانگین سرعت
          </div>
          <div className={styles.stars}>ستاره ها {ToPersianNumber(0)}</div>
        </div>

        <div className={` ${styles.grid} pure-g`}>
          {lessonsData.map((lesson, i) => (
            <div
              key={lesson.id}
              className={` ${styles.box} pure-u-sm-1-4 pure-u-md-1-6 pure-u-lg-1-7 pure-u-xl-1-8 `}
              onClick={() => lesson.unlocked && onLessonSelect(lesson)}
            >
              <h3 className={styles.type}>{lesson.type}</h3>
              <h3 className={styles.title}>{lesson.title}</h3>
              <LuBookOpenText style={{ fontSize: "50px" }} />
              <div>
                {Array.from({ length: lesson.stars ?? 0 }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={`${styles.indexAbsolute}`}>
                {ToPersianNumber(i + 1)}
              </p>
              {!lesson.unlocked && <div className={styles.blur}></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LessonContainer;
