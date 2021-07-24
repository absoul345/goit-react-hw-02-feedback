import React from "react";
import Counter from "./components/counter/Counter";
import styles from "./Styles.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  );
};

export default App;
