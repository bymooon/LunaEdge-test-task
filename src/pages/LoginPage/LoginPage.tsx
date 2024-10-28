import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import chadLogo from "../../assets/chadLogo.png";
import iconEye from "../../assets/iconEye.svg";
import iconEyeOff from "../../assets/iconEyeOff.svg";
import ConnectShopify from "../../components/ShopifyConnection/ConnectShopify/ConnectShopify";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const dots = Array(5).fill(0);

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prevStep) => prevStep - 1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(2);
  };

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
    <div className={styles["container"]}>
      <div className={styles["progress-container"]}>
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
          <button onClick={handleBack}>&lt; Back</button>
          <button onClick={handleNext}>Next &gt;</button>
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
      <div className={styles["login-container"]}>
        {currentStep === 1 && (
          <div className={styles["login-box"]}>
            <div className={styles["title-box"]}>
              <img src={chadLogo} alt="Logo" />
              <h2 className={styles["login-title"]}>Chad</h2>
            </div>
            <p className={styles["login-welcome"]}>Welcome to Chad</p>
            <p className={styles["login-paragraph"]}>
              Go live in 10 minutes! Our self-service widget empowers your
              customers to manage orders and track shipments 24/7 without
              driving you crazy.
            </p>
            <div className={styles["form-container"]}>
              <form onSubmit={handleFormSubmit}>
                <div className={styles["form-group"]}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="megachad@trychad.com"
                  />
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Mega Chad"
                  />
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="password">Password</label>
                  <div className={styles["password-container"]}>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      required
                      placeholder="Enter password"
                    />
                    <span
                      className={styles["show-password"]}
                      onClick={togglePasswordVisibility}
                    >
                      <img
                        src={showPassword ? iconEyeOff : iconEye}
                        alt="Toggle visibility"
                      />
                    </span>
                  </div>
                </div>

                <button type="submit" className={styles["submit-button"]}>
                  Create account
                </button>
              </form>
              <h3 className={styles["login-question"]}>
                Already have an account? <a href="#">Login</a>
              </h3>
            </div>
          </div>
        )}
        {currentStep === 2 && <ConnectShopify handleNext={handleNext} />}
      </div>
    </div>
  );
};

export default LoginPage;
