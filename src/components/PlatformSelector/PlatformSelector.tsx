import styles from "./platformSelector.module.css";
import chadLogo from "../../assets/chadLogo.png";

type OptionType = {
  label: string;
  value: string;
};

const PlatformSelector: React.FC<{
  handleDecline: () => void;
  welcome: string;
  paragraph: string;
  options: OptionType[];
  buttonText: string;
  question: string;
}> = ({ handleDecline, welcome, paragraph, options, buttonText, question }) => {
  return (
    <div className={styles["platform-box"]}>
      <div className={styles["title-box"]}>
        <img src={chadLogo} alt="Logo" />
        <h2 className={styles["platform-title"]}>Chad</h2>
      </div>
      <p className={styles["platform-welcome"]}>{welcome}</p>
      <p className={styles["platform-paragraph"]}>{paragraph}</p>
      <label htmlFor="platform" className={styles["platform-label"]}>
        Platform
      </label>
      <select
        className={styles["select-platform"]}
        name="select platform"
        id="platform"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className={styles["submit-button"]}
        onClick={handleDecline}
      >
        {buttonText}
      </button>
      <h3 className={styles["platform-question"]}>
        {question}
        <a href="#"> Connect</a>
      </h3>
    </div>
  );
};

export default PlatformSelector;
