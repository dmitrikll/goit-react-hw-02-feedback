import { Component, FeedBackOptions, Notification, Section, Statistics } from 'utils/allComponents';

export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };
  
  onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given"/>
        ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    )
  }
};