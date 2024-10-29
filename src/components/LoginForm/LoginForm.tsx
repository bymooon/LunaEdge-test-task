import React, { useState } from "react";
import styles from "./loginForm.module.css";
import chadLogo from "../../assets/chadLogo.png";
import iconEye from "../../assets/iconEye.svg";
import iconEyeOff from "../../assets/iconEyeOff.svg";
import { useAuth } from "../../context/AuthContext";
import MobileStepper from "../MobileStepper/MobileStepper";

const LoginForm: React.FC<{
  handleNext: () => void;
  currentStep: number;
  isDeskopLoginProgressHidden: boolean;
}> = ({ handleNext, currentStep, isDeskopLoginProgressHidden }) => {
  const { email, setEmail, name, setName, password, setPassword } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNext();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles["login-box"]}>
      <div className={styles["title-box"]}>
        <img src={chadLogo} alt="Logo" />
        <h2 className={styles["login-title"]}>Chad</h2>
      </div>
      {isDeskopLoginProgressHidden && (
        <MobileStepper currentStep={currentStep} />
      )}
      <p className={styles["login-welcome"]}>Welcome to Chad</p>
      <p className={styles["login-paragraph"]}>
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default LoginForm;
