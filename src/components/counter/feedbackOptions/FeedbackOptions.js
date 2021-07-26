import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback, stateKeys }) => {
  return (
    <>
      {stateKeys.map((stateKey) => (
        <button
          className={`${styles.btnOptionStyles} ${styles.btnOptions}`}
          key={uuidv4()}
          type="button"
          name={stateKey}
          onClick={onLeaveFeedback}
        >
          {stateKey}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.prototypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
