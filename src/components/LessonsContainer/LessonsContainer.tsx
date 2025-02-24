import "purecss/build/pure.css";
import { LuBookOpenText } from "react-icons/lu";
import useLessonData, { Lesson } from "../../lessonData";

import styles from "./lessonsContainer.module.css";
export interface Props {
	onLessonSelect: (lesson: Lesson) => void;
}

const LessonContainer = ({ onLessonSelect }: Props) => {

	const { lessonsData } = useLessonData()
	return (
		<>
			<div className={styles.container}>
				<div className={styles.average}>
					<div className={styles.averageSpeed}>میانگین سرعت ثبت نشده</div>
					<div className={styles.stars}>ستاره ها 0</div>
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
							<p className={`${styles.indexAbsolute}`}>{i + 1}</p>
							{!lesson.unlocked && <div className={styles.blur}></div>}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default LessonContainer;
