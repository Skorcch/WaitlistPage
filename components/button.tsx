import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({
  className = "",
  hasIconEnd = true,
  hasIconStart = false,
  label = "Join waitlist",
}) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      {hasIconStart && (
        <img className={styles.starIcon} alt="" src="/star.svg" />
      )}
      <div className={styles.button1}>{label}</div>
      {hasIconEnd && (
        <img className={styles.arrowRightIcon} alt="" src="/arrow-right.svg" />
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  label: PropTypes.string,
};

export default Button;
