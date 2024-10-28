import shopifyAvatar from "../../../assets/shopifyAvatar.png";
import styles from "./connectShopifySuccess.module.css";
const ConnectShopifySuccess: React.FC<{ handleNext: () => void }> = ({
  handleNext,
}) => {
  return (
    <div className={styles["submit-success-box"]}>
      <div>
        <img
          src={shopifyAvatar}
          alt="Raccoon Logo"
          className={styles["raccoon-logo"]}
        />
      </div>
      <h1 className={styles["success-title"]}>Store connected</h1>
      <p className={styles["success-paragraph"]}>
        Chad is now able to manage customer support requests for [STORE-NAME].
      </p>
      <button className={styles["continue-button"]} onClick={handleNext}>
        Continue
      </button>
      <span className={styles["wrong-store"]}>
        Wrong store? <a href="#">Connect another one</a>
      </span>
    </div>
  );
};
export default ConnectShopifySuccess;
