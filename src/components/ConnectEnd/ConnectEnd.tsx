import styles from "./connectEnd.module.css";
import bigCheckMark from "../../assets/bigCheckMark.png";

const ConnectEnd: React.FC<{ endTitle: string; endParagraph: string }> = ({
  endTitle,
  endParagraph,
}) => {
  return (
    <div className={styles["end-box"]}>
      <div className={styles["title-box"]}>
        <img src={bigCheckMark} alt="checkmark" />
      </div>
      <p className={styles["end-title"]}>{endTitle}</p>
      <p className={styles["end-paragraph"]}>{endParagraph}</p>
    </div>
  );
};

export default ConnectEnd;
