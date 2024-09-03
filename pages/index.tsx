import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </footer>
      <FrameComponent />
      <div className={styles.foundersGridWrapper}>
        <div className={styles.foundersGrid}>© 2024 Founders Grid</div>
      </div>
    </div>
  );
};

export default Desktop;
