import React from "react";
import styles from "./lessonsContainer.module.css";
import "purecss/build/pure.css";
import lessonData from "../../lessonData";
import { LuBookOpenText } from "react-icons/lu";

const LessonContainer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.average}>
          <div className={styles.averageSpeed}>میانگین سرعت ثبت نشده</div>
          <div className={styles.stars}>ستاره ها 0</div>
        </div>

        <div className="pure-g">
          {lessonData.map((lesson, i) => (
            <div
              key={i}
              className={` ${styles.box} pure-u-1-3 pure-u-md-1-4 pure-u-lg-1-6 pure-u-xl-1-8 `}
            >
              <h3 className={styles.type}>{lesson.type}</h3>
              <h3 className={styles.title} >{lesson.title}</h3>
              <LuBookOpenText style={{ fontSize: "50px" }} />
              <p className={`${styles.indexAbsolute}`}>{i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LessonContainer;
