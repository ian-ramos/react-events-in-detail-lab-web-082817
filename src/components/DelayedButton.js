// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = (e) => {
    e.persist()
    //setTimeout takes an argument of a function (meaning you don't invoke it), but onDelayedClick needs an argument.  So we pass in an function that points to onDelayedClick so that we can pass onDelayedClick an argument
    return setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
