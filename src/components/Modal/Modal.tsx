import { useState } from "react";
import styles from "./modal.module.css";

const Modal = () => {
	const [modal, setModal] = useState<boolean>(false);
	const [newPracticeText, setNewPracticeText] = useState<string>("");
	const [char, setChar] = useState<number>(0);

	const toggleModal = () => {
		setModal(!modal);
	};

	const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewPracticeText(e.target.value);
		setChar(e.target.value.length);
	};

	return (
		<div className={`${styles.modalWrapper} ${modal ? styles.noScroll : ""}`}>
			<button onClick={toggleModal} className={styles.btnModal}>
				ساخت تمرین
			</button>

			{modal && (
				<div className={styles.modalShow} aria-hidden={!modal} aria-modal="true">
					<div onClick={toggleModal} className={styles.overlay}></div>
					<div className={styles.modalContent}>
						<h2 className={styles.modalTitle}>ساخت تمرین</h2>
						<textarea
							className={styles.modalTextarea}
							onChange={textAreaHandler}
							value={newPracticeText}
						></textarea>
						<div
							className={`char-limit ${char > 1000 ? styles.charLimitRed : ""}`}
						>
							{char}/1000
						</div>
						<button className={styles.addPractice} role="button">
							شروع تمرین
						</button>
						<button className={`pure-button ${styles.closeModal}`} onClick={toggleModal}>
							بستن
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
