import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import chadLogo from "../../assets/chadLogo.png";
import iconEye from "../../assets/iconEye.svg";
import iconEyeOff from "../../assets/iconEyeOff.svg";
import ConnectShopify from "../../components/ConnectShopify/ConnectShopify";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentStep(2);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["progress-container"]}>
        <div className={styles["progress-box"]}>
          <div className={styles["progress-item"]}>
            <div className={styles["circle"]}></div>
            <p>Welcome</p>
          </div>
          <div className={styles["line"]}></div>
        </div>

        <div className={styles["progress-box"]}>
          <div className={styles["progress-item"]}>
            <div className={styles["circle"]}></div>
            <p>Connect your Shopify store</p>
          </div>
          <div className={styles["line"]}></div>
        </div>

        <div className={styles["progress-box"]}>
          <div className={styles["progress-item"]}>
            <div className={styles["circle"]}></div>
            <h2>Connect your customer support email</h2>
          </div>
          <div className={styles["line"]}></div>
        </div>

        <div className={styles["progress-box"]}>
          <div className={styles["progress-item"]}>
            <div className={styles["circle"]}></div>
            <p>Done</p>
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
        <div className={styles["dots-container"]}>
          <div className={styles["dot"]}></div>
          <div className={styles["dot"]}></div>
          <div className={styles["dot"]}></div>
          <div className={styles["dot"]}></div>
          <div className={styles["dot"]}></div>
        </div>
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
        {currentStep === 2 && <ConnectShopify />}
      </div>
    </div>
  );
};

export default LoginPage;
