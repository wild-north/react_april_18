import React, { Component, PureComponent, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class Message extends Component {
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    render() {
        return <p>{ this.props.text }</p>
    }
}
Message.propTypes = {
    text: PropTypes.string.isRequired
};

class Clock extends PureComponent {
    constructor() {
        super();
        this.state = {
            date: (new Date()).toLocaleTimeString()
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ date: this.getDate() })
        }, 1000);
    }
    getDate() {
      return (new Date()).toLocaleTimeString();
    }
    render() {
        return (
            <Fragment>
                <Message text={ this.state.date }/>
                <button>stop</button>
            </Fragment>
        );
    }
}


class Root extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Clock />

          {/*<Message text="my message"/>*/}

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Root;
