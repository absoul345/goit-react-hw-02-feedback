import React from "react";
import Notification from "../notification/Notification";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({
  stateGood,
  stateneutral,
  stateBad,
  total,
  positiveFeedback,
}) => {
  return (
    <>
      {total ? (
        <>
          <p className={styles.statisticsInfo}>
            Good:<span>{stateGood}</span>
          </p>
          <p className={styles.statisticsInfo}>
            Neutral:<span>{stateneutral}</span>
          </p>
          <p className={styles.statisticsInfo}>
            Bad:<span>{stateBad}</span>
          </p>
          <p className={styles.statisticsInfo}>
            Total:<span>{total}</span>
          </p>
          <p className={styles.statisticsInfo}>
            Positive feedback:<span>{positiveFeedback}%</span>
          </p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

Statistics.prototype = {
  total: PropTypes.number.isRequired,
  stateGood: PropTypes.number.isRequired,
  stateneutral: PropTypes.number.isRequired,
  stateBad: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
