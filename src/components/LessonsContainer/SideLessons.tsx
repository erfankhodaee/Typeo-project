import "purecss/build/pure.css";
import { LuBookOpenCheck, LuBookOpenText } from "react-icons/lu";
import type { Lesson } from "../../lessonData";
import styles from "./sideLessons.module.css";
import { memo } from "react";
import useLessonData from "../../lessonData";
interface Props {
	onLessonSelect: (lesson: Lesson) => void;
}
const SideLessons = ({ onLessonSelect }: Props) => {


	const { lessonsData } = useLessonData()
	console.log("first");
	return (
		<>
			<div className={styles.container}>
				<div className={` ${styles.grid} pure-g`}>
					{lessonsData.map((lesson, i) => (
						<div
							key={lesson.id}
							className={` ${styles.box} pure-u-1 pure-u-md-1-2`}
							onClick={() => lesson.unlocked && onLessonSelect(lesson)}
						>
							<h3 className={styles.type}>{lesson.type}</h3>
							<h3 className={styles.title}>{lesson.title}</h3>
							{lesson.done ? <LuBookOpenCheck style={{ fontSize: "50px" }} /> : <LuBookOpenText style={{ fontSize: "50px" }} />}
							<p className={`${styles.indexAbsolute}`}>{i + 1}</p>
							{!lesson.unlocked && <div className={styles.blur}></div>}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default memo(SideLessons);
