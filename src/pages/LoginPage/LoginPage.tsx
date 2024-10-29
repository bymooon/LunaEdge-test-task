import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import ConnectShopify from "../../components/ShopifyConnection/ConnectShopify/ConnectShopify";
import ConnectGmail from "../../components/ConnectGmail/ConnectGmail";
import LoginProgress from "../../components/LoginProgress/LoginProgress";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const LoginPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDeskopLoginProgressHidden = useMediaQuery("(max-width: 1194px)");
  // const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1194px)");

  const handleNext = () => {
    if (currentStep < 4) {
      setCompletedSteps((prevSteps) => {
        const newSteps = [...prevSteps];
        newSteps[currentStep - 1] = true;
        return newSteps;
      });
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className={styles["container"]}>
      {!isDeskopLoginProgressHidden && (
        <LoginProgress
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
          completedSteps={completedSteps}
        />
      )}

      <div
        className={
          isMobile
            ? styles["mobile-login-container"]
            : styles["login-container"]
        }
      >
        {currentStep === 1 && (
          <LoginForm
            handleNext={handleNext}
            currentStep={currentStep}
            isDeskopLoginProgressHidden={isDeskopLoginProgressHidden}
          />
        )}
        {currentStep === 2 && (
          <ConnectShopify
            handleNext={handleNext}
            currentStep={currentStep}
            isDeskopLoginProgressHidden={isDeskopLoginProgressHidden}
          />
        )}
        {currentStep === 3 && (
          <ConnectGmail
            currentStep={currentStep}
            isDeskopLoginProgressHidden={isDeskopLoginProgressHidden}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
