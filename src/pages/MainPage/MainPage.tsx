import styles from "./mainPage.module.css";
const MainPage: React.FC = () => {
  return (
    <div className={styles["main-page"]}>
      <p className={styles["main-text"]}> Hello Luna Edge, My name is Anton.</p>
    </div>
  );
};

export default MainPage;
