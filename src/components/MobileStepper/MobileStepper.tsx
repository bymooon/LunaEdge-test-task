import React from "react";
import styles from "./MobileStepper.module.css";

interface MobileStepperProps {
  currentStep: number;
}

const MobileStepper: React.FC<MobileStepperProps> = ({ currentStep }) => {
  return (
    <div className={styles.stepperContainer}>
      <div className={styles.progressText}>{`Step ${currentStep} of 4`}</div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${(currentStep / 4) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MobileStepper;
