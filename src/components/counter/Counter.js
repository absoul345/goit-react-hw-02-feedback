import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section";

export class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  bad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positivePercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const positiveFeedback = Math.round((good * 100) / total);
    return positiveFeedback;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.positivePercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.good}
            neutral={this.neutral}
            bad={this.bad}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            stateGood={this.state.good}
            stateneutral={this.state.neutral}
            stateBad={this.state.bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}

export default Counter;
