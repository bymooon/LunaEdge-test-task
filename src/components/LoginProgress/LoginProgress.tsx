import styles from "./loginProgress.module.css";
const LoginProgress: React.FC<{
  currentStep: number;
  completedSteps: boolean[];
  handleNext: () => void;
  handleBack: () => void;
}> = ({ currentStep, completedSteps, handleNext, handleBack }) => {
  const dots = Array(5).fill(0);
  const CheckIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.285 5.955a1 1 0 00-1.414 0L9 15.828 5.13 11.958a1 1 0 10-1.414 1.414l4.95 4.95a1 1 0 001.414 0l10.205-10.204a1 1 0 000-1.414z"
        fill="#FFFFFF"
      />
    </svg>
  );

  return (
    <div className={styles["progress-container"]}>
      <div>
        <div className={styles["progress-item"]}>
          <div
            className={`${styles["circle"]} 
            ${currentStep === 1 ? styles["current-circle"] : ""}
            ${currentStep > 1 ? styles["active-circle"] : ""}`}
          >
            {currentStep > 1 && <CheckIcon />}
          </div>
          <p>Welcome</p>
        </div>
        <div
          className={`${styles["line"]} ${
            currentStep >= 2 ? styles["active-line"] : ""
          }`}
        />
        <div className={styles["progress-item"]}>
          <div
            className={`${styles["circle"]} 
            ${currentStep === 2 ? styles["current-circle"] : ""}
            ${currentStep > 2 ? styles["active-circle"] : ""}`}
          >
            {currentStep > 2 && <CheckIcon />}
          </div>
          <p>Connect your Shopify store</p>
        </div>
        <div
          className={`${styles["line"]} ${
            currentStep >= 3 ? styles["active-line"] : ""
          }`}
        />
        <div className={styles["progress-item"]}>
          <div
            className={`${styles["circle"]} 
            ${currentStep === 3 ? styles["current-circle"] : ""}
            ${currentStep > 3 ? styles["active-circle"] : ""}`}
          >
            {currentStep > 3 && <CheckIcon />}
          </div>
          <p>Connect your customer support email</p>
        </div>
        <div
          className={`${styles["line"]} ${
            currentStep >= 4 ? styles["active-line"] : ""
          }`}
        />
        <div className={styles["progress-item"]}>
          <div
            className={`${styles["circle"]} 
            ${currentStep === 4 ? styles["current-circle"] : ""}
            ${currentStep > 4 ? styles["active-circle"] : ""}`}
          >
            {currentStep > 4 && <CheckIcon />}
          </div>
          <p>Done</p>
        </div>
        <div className={styles["progress-controls"]}>
          <button disabled={currentStep === 1} onClick={handleBack}>
            &lt; Back
          </button>
          <button
            disabled={!completedSteps[currentStep - 1]}
            onClick={handleNext}
          >
            Next &gt;
          </button>
        </div>
      </div>
      <div className={styles["onboarding-stats-container"]}>
        <div className={styles["onboarding-stats-box"]}>
          <p className={styles["onboarding-stats-number"]}>5X</p>
          <p className={styles["onboarding-stats-paragraph"]}>
            Acquiring a new customer is 5x more costly than making an unhappy
            customer happy
          </p>
        </div>
      </div>

      <ul className={styles["dots-container"]}>
        {dots.map((_, index) => (
          <li key={index} className={styles["dot"]} />
        ))}
      </ul>
    </div>
  );
};

export default LoginProgress;
