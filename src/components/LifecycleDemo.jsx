import { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date()
    };
  }

  componentDidMount() {
    console.log('Component mounted');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    if (prevState.count !== this.state.count) {
      console.log('Count changed from', prevState.count, 'to', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  render() {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Class Component Lifecycle</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Current time: {this.state.date.toLocaleTimeString()}
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Count: {this.state.count}
        </p>
        <button
          onClick={this.increment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;