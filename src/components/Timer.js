import React from 'react';

class Timer extends React.Component {

    state = { secondsElapsed: 0 }
  
    tick = () => {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 10
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(this.tick, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
      );
    }
  }

  export default Timer;