import React from "react";
import chadLogo from "../../assets/chadLogo.png";
import iconCheck from "../../assets/iconCheck.svg";
import styles from "./connectShopify.module.css";

const ConnectShopify: React.FC = () => {
  return (
    <div className={styles["shopify-box"]}>
      <div className={styles["title-box"]}>
        <img src={chadLogo} alt="Logo" />
        <h2 className={styles["shopify-title"]}>Chad</h2>
      </div>
      <p className={styles["shopify-welcome"]}>Connect your Shopify store</p>
      <p className={styles["shopify-paragraph"]}>
        Installs the Chad widget in your Shopify store and sets it up to display
        your customers’ order information and self-serve options.
      </p>
      <div className={styles["shopify-features-box"]}>
        <div className={styles["shopify-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["shopify-features-title"]}>
              Track orders and shipping
            </h3>
            <p className={styles["shopify-features-paragraph"]}>
              Global coverage with 600+ couriers supported
            </p>
          </div>
        </div>

        <div className={styles["shopify-features-item"]}>
          <img src={iconCheck} alt="check" />
          <div>
            <h3 className={styles["shopify-features-title"]}>Manage orders</h3>
            <p className={styles["shopify-features-paragraph"]}>
              Allow customers to track, return, exchange, or report problems
              with their orders
            </p>
          </div>
        </div>

        <div className={styles["shopify-features-item"]}>
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
        </div>
      </div>

      <button type="submit" className={styles["submit-button"]}>
        Connect store
      </button>
      <div className={styles["cancel-submit"]}>
        <a href="#" className={styles["login-question"]}>
          I don`t use Shopify
        </a>
      </div>
    </div>
  );
};

export default ConnectShopify;
