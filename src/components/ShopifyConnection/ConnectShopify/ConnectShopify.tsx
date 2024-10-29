import React, { useState } from "react";
import chadLogo from "../../../assets/chadLogo.png";
import iconCheck from "../../../assets/iconCheck.svg";
import styles from "./connectShopify.module.css";
import ConnectShopifySuccess from "../ConnectShopifySuccess/ConnectShopifySuccess";
import ConnectShopifyDecline from "../ConnectShopifyDecline/ConnectShopifyDecline";
import ConnectEnd from "../../ConnectEnd/ConnectEnd";
import MobileStepper from "../../MobileStepper/MobileStepper";

const ConnectShopify: React.FC<{
  handleNext: () => void;
  currentStep: number;
  isDeskopLoginProgressHidden: boolean;
}> = ({ handleNext, currentStep, isDeskopLoginProgressHidden }) => {
  const [submitConnect, setSubmitConnect] = useState(false);
  const [isAlternativeConnect, setIsAlternativeConnect] = useState(false);
  const [handleEnd, setHandleEnd] = useState(false);

  const handleDecline = () => {
    setHandleEnd(true);
  };

  return handleEnd ? (
    <ConnectEnd
      endTitle="Response received"
      endParagraph="Thank you for your interest in Chad! We’ll be hard at work building
        integrations to support your platform."
    />
  ) : !submitConnect ? (
    <div className={styles["shopify-box"]}>
      <div className={styles["title-box"]}>
        <img src={chadLogo} alt="Logo" />
        <h2 className={styles["shopify-title"]}>Chad</h2>
      </div>
      {isDeskopLoginProgressHidden && (
        <MobileStepper currentStep={currentStep} />
      )}
      <p className={styles["shopify-welcome"]}>Connect your Shopify store</p>
      <p className={styles["shopify-paragraph"]}>
        Installs the Chad widget in your Shopify store and sets it up to display
        your customers’ order information and self-serve options.
      </p>
      <ul className={styles["shopify-features-box"]}>
        <li className={styles["shopify-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["shopify-features-title"]}>
              Track orders and shipping
            </h3>
            <p className={styles["shopify-features-paragraph"]}>
              Global coverage with 600+ couriers supported
            </p>
          </div>
        </li>
        <li className={styles["shopify-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["shopify-features-title"]}>Manage orders</h3>
            <p className={styles["shopify-features-paragraph"]}>
              Allow customers to track, return, exchange, or report problems
              with their orders
            </p>
          </div>
        </li>
        <li className={styles["shopify-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["shopify-features-title"]}>
              Process returns and exchanges
            </h3>
            <p className={styles["shopify-features-paragraph"]}>
              Automatically checks your store policy and existing inventory
              before resolving or escalating each request
            </p>
          </div>
        </li>
      </ul>

      <button
        type="submit"
        className={styles["submit-button"]}
        onClick={() => setSubmitConnect(true)}
      >
        Connect store
      </button>
      <div className={styles["cancel-submit"]}>
        <a
          href="#"
          className={styles["login-question"]}
          onClick={(e) => {
            e.preventDefault();
            setIsAlternativeConnect(true);
            setSubmitConnect(true);
          }}
        >
          I don`t use Shopify
        </a>
      </div>
    </div>
  ) : isAlternativeConnect ? (
    <ConnectShopifyDecline handleDecline={handleDecline} />
  ) : (
    <ConnectShopifySuccess handleNext={handleNext} />
  );
};

export default ConnectShopify;
