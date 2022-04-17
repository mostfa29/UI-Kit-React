import React, { Component } from 'react'

//non ui component
//role :work on props and return it to Btn ro render it+handeling events
 class Button extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  // button events's states
   this.state = { hover: false,click:false,focus:false };
    this.hoverHandlerOn = this.hoverHandlerOn.bind(this);
    this.hoverHandlerOf = this.hoverHandlerOf.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.focusHandler=this.focusHandler.bind(this)
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default Button