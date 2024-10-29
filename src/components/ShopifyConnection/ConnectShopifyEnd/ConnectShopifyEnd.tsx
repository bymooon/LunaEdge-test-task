import styles from "./connectShopifyEnd.module.css";
import bigCheckMark from "../../../assets/bigCheckMark.png";

const ConnectShopifyEnd: React.FC<{}> = ({}) => {
  return (
    <div className={styles["end-box"]}>
      <div className={styles["title-box"]}>
        <img src={bigCheckMark} alt="checkmark" />
      </div>
      <p className={styles["end-title"]}>Response received</p>
      <p className={styles["end-paragraph"]}>
        Thank you for your interest in Chad! We’ll be hard at work building
        integrations to support your platform.
      </p>
    </div>
  );
};

export default ConnectShopifyEnd;
