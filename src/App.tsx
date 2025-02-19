import "purecss/build/grids-responsive-min.css";
import "purecss/build/pure-min.css";
import { useState } from "react";
import LessonContainer from "./components/LessonsContainer/LessonsContainer";
import Modal from "./components/Modal/Modal";
import Typing from "./components/Typing/Typing";
import { Lesson } from "./lessonData";
import SideLessons from "./components/LessonsContainer/SideLessons";

function App() {
	const [lessonsLeft, setLessonsLeft] = useState(false);
	const [currentLesson, setCurrentLesson] = useState<Lesson | null>();


	const onLessonSelect = (lesson: Lesson) => {
		setLessonsLeft(true);
		setCurrentLesson(lesson);
	};

	return (
		<div className="app-container">
			{lessonsLeft && (
				<>
					<SideLessons onLessonSelect={onLessonSelect} />
					<Typing
						title={currentLesson?.title}
						text={currentLesson?.description}
						key={currentLesson?.id}
					/>
				</>
			)}
			{!lessonsLeft && (
				<>
					<LessonContainer onLessonSelect={onLessonSelect} />
				</>
			)}
			<Modal  />
		</div>
	);
}

export default App;
