import React from "react";
import styles from "./sideLessons.module.css";
import "purecss/build/pure.css";
import lessonData from "../../lessonData";
import { LuBookOpenText } from "react-icons/lu";

const SideLessons = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={` ${styles.grid} pure-g`}>
          {lessonData.map((lesson, i) => (
            <div
              key={lesson.id}
              className={` ${styles.box} pure-u-1 pure-u-md-1-2`}
              onClick={() => console.log(lesson.title)}
            >
              <h3 className={styles.type}>{lesson.type}</h3>
              <h3 className={styles.title}>{lesson.title}</h3>
              <LuBookOpenText style={{ fontSize: "50px" }} />
              <p className={`${styles.indexAbsolute}`}>{i + 1}</p>
              {!lesson.unlocked && <div className={styles.blur}></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideLessons;
