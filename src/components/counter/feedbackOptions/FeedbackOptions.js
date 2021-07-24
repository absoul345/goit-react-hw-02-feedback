import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <div>
      <button
        className={`${styles.btnOptions} ${styles.btnOptionStyles}`}
        type="button"
        onClick={good}
      >
        Good
      </button>
      <button
        className={`${styles.btnOptions} ${styles.btnOptionStyles}`}
        type="button"
        onClick={neutral}
      >
        Neutral
      </button>
      <button
        className={`${styles.btnOptions} ${styles.btnOptionStyles}`}
        type="button"
        onClick={bad}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.prototypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
