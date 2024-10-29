import React, { useState } from "react";
import chadLogo from "../../assets/chadLogo.png";
import iconCheck from "../../assets/iconCheck.svg";
import styles from "./connectGmail.module.css";
import googleIcon from "../../assets/googleIcon.svg";
import { useNavigate } from "react-router-dom";
import PlatformSelector from "../PlatformSelector/PlatformSelector";
import ConnectEnd from "../ConnectEnd/ConnectEnd";
import MobileStepper from "../MobileStepper/MobileStepper";

const ConnectGmail: React.FC<{
  currentStep: number;
  isDeskopLoginProgressHidden: boolean;
}> = ({ currentStep, isDeskopLoginProgressHidden }) => {
  const [submitGmail, setSubmitGmail] = useState(false);
  const [isAlternativeConnect, setIsAlternativeConnect] = useState(false);
  const navigate = useNavigate();

  return !submitGmail ? (
    <div className={styles["gmail-box"]}>
      <div className={styles["title-box"]}>
        <img src={chadLogo} alt="Logo" />
        <h2 className={styles["gmail-title"]}>Chad</h2>
      </div>
      {isDeskopLoginProgressHidden && (
        <MobileStepper currentStep={currentStep} />
      )}
      <p className={styles["gmail-welcome"]}>
        Connect your customer support email
      </p>
      <p className={styles["gmail-paragraph"]}>
        Allows Chad to send automated responses on your behalf from your usual
        support mailbox
      </p>
      <ul className={styles["gmail-features-box"]}>
        <li className={styles["gmail-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["gmail-features-title"]}>
              Contextual responses
            </h3>
            <p className={styles["gmail-features-paragraph"]}>
              Custom responses to any support situation from <br /> “where’s my
              stuff?” to “I want a refund”
            </p>
          </div>
        </li>
        <li className={styles["gmail-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["gmail-features-title"]}>
              Reply from anywhere
            </h3>
            <p className={styles["gmail-features-paragraph"]}>
              Respond to your customers via email or Chad chat—it’s
              <br /> all saved in the same thread
            </p>
          </div>
        </li>
        <li className={styles["gmail-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["gmail-features-title"]}>
              Categorical inbox tags
            </h3>
            <p className={styles["gmail-features-paragraph"]}>
              Tags your emails by category so you know what <br /> to expect
              before even opening an email
            </p>
          </div>
        </li>
      </ul>
      <div className={styles["submit-box"]}>
        <button
          type="submit"
          className={styles["submit-button"]}
          onClick={() => navigate("/main")}
        >
          <div className={styles["google-icon"]}>
            <img src={googleIcon} alt="google" />
          </div>
          <span className={styles["gmail-submit-text"]}>
            Connect Gmail account
          </span>
        </button>
      </div>
      <div className={styles["cancel-submit"]}>
        <a
          href="#"
          className={styles["login-question"]}
          onClick={(e) => {
            e.preventDefault();
            setIsAlternativeConnect(true);
            setSubmitGmail(true);
          }}
        >
          I don’t use Gmail
        </a>
      </div>
    </div>
  ) : isAlternativeConnect ? (
    <PlatformSelector
      handleDecline={() => setIsAlternativeConnect(false)}
      welcome="Don’t use Gmail?"
      paragraph="Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform."
      options={[
        { label: "Select platform", value: "platform" },
        { label: "Meta", value: "meta" },
        { label: "Yahoo", value: "yahoo" },
      ]}
      buttonText="Submit"
      question="Actually use Gmail?"
    />
  ) : (
    <ConnectEnd
      endTitle="Response received"
      endParagraph="Thank you for your interest in Chad! We’ll be hard at work building integrations to support your email client."
    />
  );
};

export default ConnectGmail;
