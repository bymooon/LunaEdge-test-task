import React from "react";
import styles from "./loginProgress.module.css";

const LoginProgress: React.FC<{
  currentStep: number;
  completedSteps: boolean[];
  handleNext: () => void;
  handleBack: () => void;
}> = ({ currentStep, completedSteps, handleNext, handleBack }) => {
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

  const dots = Array(5).fill(0);

  const steps = [
    "Welcome",
    "Connect your Shopify store",
    "Connect your customer support email",
    "Done",
  ];

  return (
    <div className={styles["progress-container"]}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={styles["progress-item"]}
            data-active={currentStep === index + 1}
            data-completed={completedSteps[index]}
          >
            <div className={`${styles["circle"]} `}>
              {completedSteps[index] && <CheckIcon />}
            </div>
            <p>{step}</p>
          </div>
          {index < steps.length - 1 && <div className={`${styles["line"]}`} />}
        </React.Fragment>
      ))}
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
